import React, { useState } from "react";

import * as S from "./Quiz.styles";

import TransitionScreen from "../Book/components/TransitionScreen";

import questions from "./quiz";

type Page = "start" | "quiz" | "end";

interface IfeedbackProps {
  status: string;
  message: string;
}

const Quiz: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>("start");
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [currentAnswer, setCurrentAnswer] = useState<number | null>(null);
  const [answerHistory, setAnswerHistory] = useState<number[]>([]);
  const [showFeedback, setShowFeedback] = useState<IfeedbackProps | null>(null);

  const question = questions[currentQuestion];

  const prevQuestion = () =>
    setCurrentQuestion((currentQuestion) =>
      currentQuestion !== 0 ? currentQuestion - 1 : 0
    );

  const nextQuestion = () => {
    const endedQuestions = currentQuestion === questions.length - 1;

    setCurrentQuestion((currentQuestion) =>
      endedQuestions ? questions.length - 1 : currentQuestion + 1
    );

    if (endedQuestions) setCurrentPage("end");
  };

  const mapIndexToLetter = (index: number): string => {
    const letters: { [key: number]: string } = {
      0: "(A)",
      1: "(B)",
      2: "(C)",
      3: "(D)",
    };

    return letters[index];
  };

  const getSelected = (index: number) => {
    if (answerHistory[currentQuestion] !== undefined) {
      return answerHistory[currentQuestion] === index;
    }
    return currentAnswer === index;
  };

  const getDisabled = (index: number) => {
    if (answerHistory[currentQuestion] !== undefined) {
      return answerHistory[currentQuestion] !== index;
    }
    return false;
  };

  const showFeedbackWithTime = (status: string, message: string) => {
    setShowFeedback({ status, message });
  };

  const selectAnswer = (index: number) => setCurrentAnswer(index);

  const submitAnswer = async () => {
    if (answerHistory[currentQuestion] !== undefined) {
      nextQuestion();
    } else if (currentAnswer !== null) {
      setAnswerHistory([...answerHistory, currentAnswer]);

      if (currentAnswer === question.correctQuestion) {
        await showFeedbackWithTime("positive", "Resposta correta");
      } else {
        await showFeedbackWithTime(
          "negative",
          `Resposta incorreta - correta ${mapIndexToLetter(
            question.correctQuestion
          )}`
        );
      }

      setTimeout(() => {
        nextQuestion();
        setShowFeedback(null);
        setCurrentAnswer(null);
      }, 2000);
    }
  };

  const StartStage = () => (
    <TransitionScreen
      title=""
      description="Responda as perguntas a seguir para dar o próximo passo ->"
      buttonText="Iniciar perguntas"
      buttonLink={() => setCurrentPage("quiz")}
    />
  );

  const QuizStage = () => (
    <S.Wrapper>
      <S.QuizBox>
        <S.QuizCounter>{`Questão ${currentQuestion + 1} de ${
          questions.length
        }`}</S.QuizCounter>
        <S.QuizQuestion>{question.question}</S.QuizQuestion>
        <S.QuizAlternativeBox>
          {question.alternatives.map((alternative, index) => (
            <S.QuizAlternative
              key={alternative}
              onClick={() => selectAnswer(index)}
              className={getSelected(index) ? "selected" : ""}
              disabled={getDisabled(index)}
            >
              {mapIndexToLetter(index)} - {alternative}
            </S.QuizAlternative>
          ))}
          {showFeedback && (
            <S.QuizAnswerFeedback
              $isNegative={showFeedback?.status === "negative"}
            >
              {showFeedback.message}
            </S.QuizAnswerFeedback>
          )}
        </S.QuizAlternativeBox>
        <S.QuizButtons>
          <S.QuizActionButton
            className="secondary"
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
          >
            Voltar
          </S.QuizActionButton>
          <S.QuizActionButton
            onClick={submitAnswer}
            disabled={
              currentAnswer === null &&
              answerHistory[currentQuestion] === undefined
            }
          >
            {currentQuestion === questions.length - 1 ? "Finalizar" : "Próximo"}
          </S.QuizActionButton>
        </S.QuizButtons>
      </S.QuizBox>
    </S.Wrapper>
  );

  const EndStage = () => (
    <S.Wrapper>
      <S.QuizBox>
        <S.QuizEndBox>
          <S.QuizQuestion>Você foi muito bem no teste</S.QuizQuestion>

          <S.QuizActionButton
            onClick={() => window.location.assign("/surprise")}
          >
            Abrir recompensa
          </S.QuizActionButton>
        </S.QuizEndBox>
      </S.QuizBox>
    </S.Wrapper>
  );

  const getPage = () => {
    const pages = {
      start: <StartStage />,
      quiz: <QuizStage />,
      end: <EndStage />,
    };

    return pages[currentPage];
  };

  return <>{getPage()}</>;
};

export default Quiz;
