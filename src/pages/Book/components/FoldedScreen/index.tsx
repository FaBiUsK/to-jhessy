import React from "react";

import * as S from "./styles";

// import decoration from "assets/decoration.svg";

interface DescriptionProps {
  leftTitle?: string;
  leftDescription?: string;
  leftImage?: string;
  rightTitle?: string;
  rightDescription?: string;
  rightImage?: string;
}

const FoldedScreen: React.FC<DescriptionProps> = ({
  leftTitle,
  leftDescription,
  leftImage,
  rightTitle,
  rightDescription,
  rightImage,
}) => {
  return (
    <S.Wrapper>
      <S.TextContainer>
        {leftTitle && leftDescription && (
          <S.TextBox $align="right">
            <S.Title $align="right">{leftTitle}</S.Title>
            <S.Description $align="right">{leftDescription}</S.Description>
            {leftImage && (
              <img src={leftImage} alt="Imagem da esquerda" className="image" />
            )}
          </S.TextBox>
        )}
        {rightTitle && rightDescription && (
          <S.TextBox $align="left">
            <S.Title $align="left">{rightTitle}</S.Title>
            <S.Description $align="left">{rightDescription}</S.Description>
            {rightImage && (
              <img src={rightImage} alt="Imagem da direita" className="image" />
            )}
          </S.TextBox>
        )}
      </S.TextContainer>
    </S.Wrapper>
  );
};

export default FoldedScreen;
