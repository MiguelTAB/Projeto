import styled from "styled-components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavourites } from "../../redux/selector";
import FavouritesItem from "./FavouritesItem";
import { getInitialFavourites } from "../../redux/actions/favourites";

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
  }


  function ListOfFavourites () {
        const dispatch = useDispatch();
        const items = useSelector(getFavourites);
        debugger;
        return (      
                <S.ListWrapper>
                    <S.ItemWrapper>
                {items && items.map(item => <FavouritesItem music={item}/>)}
                    </S.ItemWrapper>
                </S.ListWrapper>
        );

  }

  export default ListOfFavourites;