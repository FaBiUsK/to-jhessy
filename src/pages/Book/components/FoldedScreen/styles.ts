import styled, { css } from "styled-components";
import colors from "styles/colors";
import fonts from "styles/fonts";

interface IFoldedProps {
  $align?: "left" | "right";
}

const leftContent = css`
  align-items: flex-start;
`;

const rightContent = css`
  align-items: flex-end;
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${colors.purple};
  /* @media (max-width: 768px) {
    display: flex;
  } */
`;

export const TextContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextBox = styled.div<IFoldedProps>`
  flex: 1;
  border-radius: 8px;
  background-color: ${colors.white};
  padding: 16px;
  display: flex;
  flex-direction: column;

  ${(props) => (props.$align === "left" ? leftContent : rightContent)}

  .image {
    width: 200px;
  }
`;

export const Title = styled.h1<IFoldedProps>`
  color: ${colors.purple};
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  background-image: linear-gradient(${colors.red}, ${colors.red});
  background-size: 100% 5px;
  background-repeat: no-repeat;
  background-position: 100% 0%;
  font-family: ${fonts.secondary};
  margin-bottom: 16px;
  width: fit-content;

  text-align: ${(props) => (props.$align === "left" ? "left" : "right")};

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Description = styled.p<IFoldedProps>`
  color: ${colors.purple};
  font-family: ${fonts.primary};
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  width: 50%;

  text-align: ${(props) => (props.$align === "left" ? "left" : "right")};

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 8px;
    width: 100%;
  }
`;
