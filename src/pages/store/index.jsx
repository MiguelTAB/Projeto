import React from "react";
import styled from "styled-components";
import ListOfSongs from "../../components/catalog/ListOfSongs";
import PaginationComp from "../../components/catalog/PaginationComp";
import Searchbar from "../../components/catalog/Searchbar";
import ListOfFavourites from "../../components/favourites/ListOfFavourites";

const MainPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ListWrapper = styled.div`
  width: 80%;
`;

const TitleWrapper = styled.div`
    width: 20%;
    height: 4%;
    margin: 20px;
    font-size: 50px;
    color: #30d2ff;
`;

const FavouritesWrapper = styled.div`
  width: 20%;
  flex-direction: column;
  display: flex;
  margin-top: 60px;
`;

export default function Store() {
  return (
    <MainPageWrapper>
      <ListWrapper>
        {/*<TitleWrapper>Music List</TitleWrapper>*/}
        <Searchbar/>
        <ListOfSongs/>
        <PaginationComp/>
      </ListWrapper>
      <FavouritesWrapper>
        <ListOfFavourites/>
      </FavouritesWrapper>
    </MainPageWrapper>
  );
}