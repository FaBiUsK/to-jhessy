import styled, { keyframes, createGlobalStyle } from "styled-components";

import colors from "styles/colors";
import fonts from "styles/fonts";

const heartAnimation = keyframes`
  from {
    transform: translateY(0vh) translateX(-10vw);
  }
  to {
    transform: translateY(105vh) translateX(10vw);
  }
`;

export const ResetBody = createGlobalStyle`
  body {
    overflow: hidden;
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.purple};
  overflow: hidden;

  .heart {
    position: fixed;
    font-size: 1.5rem;
    top: -1vh;
    transform: translateY(0);
    animation: ${heartAnimation} 3s linear forwards;
    z-index: 1;
  }
`;

export const Box = styled.button`
  background: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 0;
  z-index: 2;
  cursor: pointer;
  outline: none;
  overflow: hidden;
`;

export const BoxImage = styled.img`
  margin: -5px;
`;

export const AnimatedText = styled.h1`
  color: ${colors.white};
  text-transform: uppercase;
  font-family: ${fonts.primary};
  font-weight: 700;
  font-family: ${fonts.secondary};
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 150px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 0;
  z-index: 1;
  opacity: 0;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AnimatedImage = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 0;
  z-index: 1;
  opacity: 0;
`;

export const GiftImage = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 5.8em;
`;
