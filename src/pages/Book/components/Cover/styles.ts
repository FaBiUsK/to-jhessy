import styled from "styled-components";
import colors from "styles/colors";
import fonts from "styles/fonts";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.6fr 1fr;
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
`;

export const LeftTopDescription = styled.p`
  font-size: 20px;
  font-family: ${fonts.secondary};
  font-weight: 500;
  color: ${colors.red};

  position: absolute;
  top: 24px;
  left: 32px;

  @media (max-width: 768px) {
    position: relative;
    top: inherit;
    left: inherit;
  }
`;

export const LeftTitle = styled.h1`
  color: ${colors.white};
  font-family: ${fonts.secondary};
  font-weight: 400;
  font-size: 100px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 80px;
  }
`;

export const LeftSubtitle = styled.p`
  font-family: ${fonts.primary};
  color: ${colors.white};
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 30px;
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

export const LeftDescription = styled.p`
  font-family: ${fonts.primary};
  color: ${colors.white};
  font-size: 18px;
  line-height: 30px;
  font-weight: 300;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const RightSide = styled.div`
  padding: 24px 32px;
  width: 100%;
  height: 100%;
`;
