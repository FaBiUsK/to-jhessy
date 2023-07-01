import React from "react";

import * as S from "./styles";

import Gallery from "../Gallery";

const Cover: React.FC = () => {
  return (
    <S.Wrapper>
      <S.LeftSide>
        <S.LeftTopDescription>Um sentimento musical</S.LeftTopDescription>
        <S.LeftTitle>O Amor</S.LeftTitle>
        <S.LeftSubtitle>Janeiro de 2018</S.LeftSubtitle>
        <S.LeftDescription>Fábio Oliveira e Jhessy Maria</S.LeftDescription>
      </S.LeftSide>
      <S.RightSide>
        <Gallery />
      </S.RightSide>
    </S.Wrapper>
  );
};

export default Cover;
