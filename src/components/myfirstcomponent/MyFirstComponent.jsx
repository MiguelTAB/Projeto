import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addMoreMusics } from "../../redux/actions/musics";
import { getMusicsToDisplay } from "../../redux/selector";

const S = {
  ListWrapper: styled.div`  
        width: 100%;
        height: 80vh;
        background-color: #dedede;
        text-align: center;
     `,
  ItemWrapper: styled.div`
        margin: 10px;
        padding: 10px;
        background-color: gray;
        text-align: center;
        p {
            font-size: 20px;
            color: white;
            font-style: italic;
        }
     `,
  Button: styled.button`
    width: 30%;
    padding: 5px;
    margin: 10px;
    background-color: gray;
    border-radius: 3px;
    text-align: center;
    font-size: 15px;
    color: white;
    :hover{
        background-color: white;
        color: gray;
    }
 `,
};

function MyFirstComponent() {
  const dispatch = useDispatch();
  const items = useSelector(getMusicsToDisplay);

  return (
    <div>
      <S.ListWrapper>
        <S.Button onClick={() => dispatch(addMoreMusics())}>
          Load items
        </S.Button>
        {items.map((item) => (
          <S.ItemWrapper key={item.trackId}>
            <p>{item.trackName}</p>
          </S.ItemWrapper>
        ))}
      </S.ListWrapper>
    </div>
  );
}

export default MyFirstComponent;
