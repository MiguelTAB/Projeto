import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { checkIfFavourite } from '../../redux/selector';
import { addToFavourites, removeFromFavourites } from '../../redux/actions/favourites';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Button } from '@mui/material';

const S = {
    ItemWrapper: styled.div`  
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 5px;
        background-color: white;
        border-radius: 25px;
     `,
    ImageWrapper: styled.div`
        width: 15%;
        margin: 10px;
        justify-content: center;
        align-items: center;
     `,
    InfoWrapper: styled.div`
        width: 45%;
        margin-left: 20px;
        justify-content: start;
    `,
    PriceWrapper: styled.div`
        width: 10%;
        justify-content: center;
        align-items: center;
    `,
    OptionsWrapper: styled.div`
        width: 20%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `
}

function SongItem(props) {
    const fnDispatch = useDispatch();
    debugger;
    let IsMusicFavourite = useSelector((state) => checkIfFavourite(state, props.music.trackId));

    const addFavourite = function () {
        debugger;
        fnDispatch(addToFavourites(props.music));
    };

    const removeFavourite = function () {
        fnDispatch(removeFromFavourites(props.music.trackId));
    };
    return (
        <S.ItemWrapper>
            <S.ImageWrapper>
                <img src={props.music.artworkUrl100} alt="logo" />
            </S.ImageWrapper>
            <S.InfoWrapper>
                <h2>{props.music.trackName}</h2>
                <h4>{props.music.collectionName}</h4>
                <h5>{props.music.artistName}</h5>
            </S.InfoWrapper>
            <S.PriceWrapper>
                <h4>{props.music.trackPrice} $</h4>
            </S.PriceWrapper>
            <S.OptionsWrapper>
                <Button onClick={IsMusicFavourite ? removeFavourite : addFavourite}>
                    {IsMusicFavourite ? <Favorite color='#ffd505'/> : <FavoriteBorder color='black' />}
                </Button>
            </S.OptionsWrapper>
        </S.ItemWrapper>
      );
}

//{IsMusicFavourite ? <Favorite color='#ffd505' onClick={removeFavourite} /> : <FavoriteBorder onClick={addFavourite} color='black' />}
export default SongItem;