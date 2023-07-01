import styled from "styled-components";
import colors from "styles/colors";
import fonts from "styles/fonts";

interface IButtonProps {
  onClick?: () => void;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  min-height: 100vh;
  border: 40px solid ${colors.purple};

  @media (max-width: 768px) {
    border: 20px solid ${colors.purple};
  }
`;

export const TextContainer = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
`;

export const Title = styled.h1`
  color: ${colors.purple};
  text-transform: uppercase;
  font-family: ${fonts.primary};
  font-weight: 700;
  font-size: clamp(1.5rem, 1rem + 18vw, 15rem);
  font-family: ${fonts.secondary};
  font-size: 100px;
  font-weight: 400;
  background-image: linear-gradient(${colors.red}, ${colors.red});
  background-size: 100% 20px;
  background-repeat: no-repeat;
  background-position: 100% 0%;
  transition: background-size 0.7s, background-position 0.5s ease-in-out;
  margin-bottom: 16px;

  :hover {
    background-size: 100% 100%;
    background-position: 0% 100%;
    transition: background-position 0.7s, background-size 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    font-size: 40px;
    background-size: 100% 10px;
  }
`;

export const Description = styled.p`
  color: ${colors.purple};
  font-family: ${fonts.primary};
  font-weight: 500;
  font-size: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 8px;
  }
`;

export const Button = styled.button<IButtonProps>`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: ${fonts.secondary};
  margin-top: 20px;

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
