import React from "react";

import * as S from "./Start.styles";

const Start: React.FC = () => {
  return (
    <S.Wrapper>
      <S.StartButton onClick={() => window.location.assign("/book")}>
        <img src="https://media.tenor.com/pUQGNMgYn1cAAAAi/tkthao219-bubududu.gif" />
        Começar
      </S.StartButton>
    </S.Wrapper>
  );
};

export default Start;
