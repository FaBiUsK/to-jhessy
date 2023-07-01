import styled, { css } from "styled-components";
import colors from "styles/colors";
import fonts from "styles/fonts";

interface IDescriptionProps {
  $align?: string;
  $background: string | null;
}

const leftAlign = css`
  grid-template-areas: "textarea banner";
  grid-template-columns: 1fr 0.5fr;
`;

const rightAlign = css`
  grid-template-areas: "banner textarea";
  grid-template-columns: 0.5fr 1fr;
`;

const centerAlign = css`
  grid-template-areas: "textarea";
  grid-template-columns: 1fr;
`;

export const Wrapper = styled.div<IDescriptionProps>`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;

  ${(props) =>
    props.$background
      ? props.$align === "left"
        ? leftAlign
        : rightAlign
      : centerAlign};

  grid-template-rows: 1fr;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: ${(props) =>
      props.$align === "left" ? "column-reverse" : "column"};
  }
`;

export const LeftSide = styled.div`
  color: ${colors.white};
  background-color: ${colors.purple};
  padding: 24px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  grid-area: textarea;
`;

export const TextContainer = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LeftDescription = styled.p`
  font-family: ${fonts.secondary};
  color: ${colors.white};
  font-size: 18px;
  line-height: 30px;
  font-weight: 400px;
  position: relative;
  z-index: 2;

  :first-child::first-letter {
    color: ${colors.red};
    font-weight: bold;
    font-size: 70px;
    float: left;
    line-height: 60px;
    padding-right: 8px;
    margin-top: -3px;
  }

  ::before,
  ::after {
    position: absolute;
    z-index: 1;
    display: block;
    width: 30px;
    height: 40px;
    content: "";
    z-index: 0;
    font-size: 100px;
    font-family: ${fonts.primary};
  }

  ::before {
    top: -20px;
    left: -50px;
    content: open-quote;
  }

  ::after {
    bottom: -30px;
    right: 0;
    content: close-quote;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 16px;
    text-align: center;

    :first-child::first-letter {
      font-size: 60px;
    }

    ::before,
    ::after {
      font-size: 60px;
    }

    ::before {
      top: -10px;
      left: -20px;
    }

    ::after {
      bottom: -40px;
      right: 0;
    }
  }
`;

export const RightSide = styled.div<IDescriptionProps>`
  padding: 24px 32px;
  width: 100%;
  height: 100%;
  grid-area: banner;

  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${(props) => props.$background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
