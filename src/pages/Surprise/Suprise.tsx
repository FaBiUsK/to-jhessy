import React, { useReducer, useRef } from "react";
import "./animation.css";

import * as S from "./Suprise.styles";

import box from "./images/box.png";
import boxLid from "./images/box-lid.png";
import Confetti from "./components/Confetti";

interface IAnimatedProps {
  move: string;
  jump: string;
  rotated: string;
  rotating: string;
}

const init_state = {
  move: "move",
  jump: "",
  rotated: "",
  rotating: "",
};

const funct = (state: IAnimatedProps, new_state: Partial<IAnimatedProps>) => ({
  ...state,
  ...new_state,
});

const Suprise: React.FC = () => {
  const [state, dispatch] = useReducer(funct, init_state);

  const heartContainer = useRef<HTMLDivElement>(null);

  const { move, rotating, rotated, jump } = state;

  const createHeart = () => {
    if (heartContainer && heartContainer.current) {
      const heart = document.createElement("div");
      heart.classList.add("heart");

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 2 + 3 + "s";

      heart.innerText = "💗";

      document.body.appendChild(heart);

      heartContainer.current.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }
  };

  function animate() {
    let isDone = rotated === "rotated" ? true : false;

    if (!isDone) {
      dispatch({ rotating: "rotating" });
      setTimeout(() => {
        dispatch({ jump: "jump" });
        setInterval(createHeart, 300);
      }, 300);
      setTimeout(() => {
        dispatch({ rotated: "rotated" });
      }, 1000);
    } else {
      dispatch(init_state);
    }
    let moving = move === "move" ? "" : "move";
    dispatch({ move: moving });
  }

  return (
    <S.Wrapper ref={heartContainer}>
      <S.ResetBody />
      <Confetti open={jump === "jump"} />
      <S.AnimatedText className={`${jump}`}>
        Quer se casar comigo?
      </S.AnimatedText>
      <S.AnimatedImage
        className={`${jump}`}
        width={150}
        src="https://media.tenor.com/dXCpXYXq7IcAAAAi/brown-bear.gif"
        alt="Bears"
      />
      <S.Box onClick={() => animate()}>
        <S.BoxImage src={box} alt="box" />
      </S.Box>
      <S.GiftImage
        className={`lid ${move} ${rotating} ${rotated}`}
        src={boxLid}
        alt="box-lid"
      />
    </S.Wrapper>
  );
};

export default Suprise;
