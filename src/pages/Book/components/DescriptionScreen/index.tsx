import React from "react";

import * as S from "./styles";

// import decoration from "assets/decoration.svg";

interface DescriptionProps {
  description: string;
  image?: string;
  align?: "left" | "right";
}

const DescriptionScreen: React.FC<DescriptionProps> = ({
  description,
  image = null,
  align = "left",
}) => {
  return (
    <S.Wrapper $align={align} $background={image}>
      <S.LeftSide>
        <S.TextContainer>
          <S.LeftDescription>{description}</S.LeftDescription>
        </S.TextContainer>
      </S.LeftSide>
      {image && <S.RightSide $background={image}></S.RightSide>}
      {/* {!image && (
        <img src={decoration} alt="Decoração" className="background-image" />
      )} */}
    </S.Wrapper>
  );
};

export default DescriptionScreen;
