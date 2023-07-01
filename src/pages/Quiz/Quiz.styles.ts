import styled from "styled-components";

import colors from "styles/colors";
import fonts from "styles/fonts";

interface IAlternativeProps {
  onClick?: () => void;
}

interface IFeedbackProps {
  $isNegative: boolean;
}

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.purple};

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const QuizBox = styled.div`
  width: 600px;
  background-color: ${colors.white};
  border-radius: 8px;
  padding: 24px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const QuizCounter = styled.p`
  font-family: ${fonts.secondary};
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  color: ${colors.red};
  text-align: center;
  margin-bottom: 16px;
`;

export const QuizQuestion = styled.h2`
  font-family: ${fonts.secondary};
  font-size: 20px;
  font-weight: 600;
  color: ${colors.purple};
  margin-bottom: 16px;
`;

export const QuizAlternativeBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const QuizAlternative = styled.button<IAlternativeProps>`
  font-family: ${fonts.secondary};
  font-size: 18px;
  font-weight: 400;
  color: ${colors.purple};
  height: 72px;
  cursor: pointer;
  text-align: left;
  padding: 0 16px;
  background-color: transparent;
  border: none;
  border-radius: 100px;

  &.selected {
    background-color: pink;
  }

  :hover:enabled {
    background-color: pink;
  }

  :disabled {
    color: #ddd;
    cursor: not-allowed;
  }
`;

export const QuizAnswerFeedback = styled.p<IFeedbackProps>`
  font-family: ${fonts.secondary};
  font-size: 18px;
  font-weight: 400;
  padding: 16px;
  color: ${(props) => (props.$isNegative ? colors.error : colors.success)};
`;

export const QuizButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QuizActionButton = styled.button`
  font-family: ${fonts.secondary};
  font-size: 18px;
  font-weight: 400;
  color: ${colors.white};
  height: 56px;
  cursor: pointer;
  text-align: center;
  background-color: ${colors.blue};
  min-width: 150px;
  border-radius: 100px;
  border: none;

  &.secondary {
    background-color: #a881af;
  }

  :hover:enabled {
    opacity: 0.7;
  }

  :disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

export const QuizEndBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 250px;
`;
