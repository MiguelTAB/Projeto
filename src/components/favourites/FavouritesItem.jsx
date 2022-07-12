import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeFromFavourites } from "../../redux/actions/favourites"
import { IconButton, FavoriteIcon, Favorite } from "@mui/material";
import { FavoriteBorder} from "@mui/icons-material/FavoriteBorder";

const S = {
    FavouritesItem: styled.div`
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 10px 20px;
        padding: 10px 0;
        background-color: #FFFFFF;
        text-align: center;`,

    MusicProperty: styled.div`
        color:black;
        font-size:15px;
        text-align: center;
        background-color: #FFFFFF;
        width:40%;`,
};

export default function FavouritesItem(props) {
    debugger;
    const Dispatch = useDispatch();
    const removeFromFavourites = function () {
        Dispatch(removeFromFavourites(props.music.trackId));
      };
    return (
        <S.FavouritesItem>
            <S.MusicProperty>{props.music.trackName}</S.MusicProperty>
            <S.MusicProperty>{props.music.trackPrice} {props.music.currency}</S.MusicProperty>
            <div >
                <FavoriteBorder color='black'/>
            </div>
        </S.FavouritesItem>
    )
}
