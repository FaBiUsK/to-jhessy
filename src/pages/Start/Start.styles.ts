import styled from "styled-components";

import colors from "styles/colors";
import fonts from "styles/fonts";

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

export const StartButton = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: ${fonts.secondary};

  font-weight: 600;
  color: ${colors.purple};
  text-transform: uppercase;
  padding: 1.25em 2em;
  background: ${colors.white};
  border: 2px solid #b18597;
  border-radius: 0.75em;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
    background 150ms cubic-bezier(0, 0, 0.58, 1);
`;
