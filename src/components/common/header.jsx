import React from "react";
import styled from "styled-components";

const S = {
    HeaderWrapper: styled.header`
      width: 100%;
      height: 8vh;
      align-items: center;
      padding: 0px 10px;
      background-color: #52c2fa;
      font-size: calc(20px + 1vmin);
      font-family: OCR A Std, monospace;
      color: white;
      display: flex;
      flex-direction: row;
    `,
    Title: styled.h3`
      width: 50%;
    `,
    Logo: styled.image`
      width:100px;
    `,
};

export default function Header() {
  return (
    <S.HeaderWrapper>
      <S.Title>Music List</S.Title>
    </S.HeaderWrapper>
  );
}