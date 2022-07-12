import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { getMusicsToDisplay } from "../../redux/selector";
import SongItem from "./SongItem";
import { getInitialMusics } from "../../redux/actions/musics";
//SASS, LESS 
const S = {
    ListWrapper: styled.div`  
          width: 100%;
          background-color: #dedede;
          text-align: center;
          border-radius: 25px;
       `,
    ItemWrapper: styled.div`
          padding: 10px;
          background-color: #d9d9d9;
          text-align: center;
          border-radius: 25px;
          p {
              font-size: 20px;
              color: white;
              font-style: italic;
          }
       `,
  };

function ListOfSongs () {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInitialMusics());
      }, [dispatch]);
    const items = useSelector(getMusicsToDisplay);
    return (      
            <S.ListWrapper>
                <S.ItemWrapper>
            {items.map(item => <SongItem music={item}/>)}
                </S.ItemWrapper>
            </S.ListWrapper>
      );
}

export default ListOfSongs;