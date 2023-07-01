import React from "react";

import * as S from "./styles";

interface TransitionProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink?: () => void;
}

const TransitionScreen: React.FC<TransitionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  const empty = () => null;

  return (
    <S.Wrapper>
      <S.TextContainer>
        <S.Title>{title}</S.Title>

        {description && <S.Description>{description}</S.Description>}

        {buttonText && (
          <S.Button onClick={buttonLink || empty}>{buttonText}</S.Button>
        )}
      </S.TextContainer>
    </S.Wrapper>
  );
};

export default TransitionScreen;
