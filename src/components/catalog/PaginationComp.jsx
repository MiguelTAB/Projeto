import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from '@mui/material';
import { getPaginationInformation } from '../../redux/selector'
import { changeMusicPage } from '../../redux/actions/musics'; 
import styled from 'styled-components';

const S = {
    PaginationCompWrapper: styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: left;
        margin: 5px;
    `,
}


function PaginationComp() {
    const Dispatch = useDispatch();

    let paginationResult = useSelector(getPaginationInformation);

    const handleChangePage = function (oEvent, iValue) {
        Dispatch(changeMusicPage(iValue));
      };
      debugger;
      return (
        <>
        <Pagination
        
        count={Math.ceil(paginationResult.numberOfAvailableMusics / paginationResult.elementsPerPage)}
        page={paginationResult.currentPage}
        onChange={handleChangePage}
        rowsPerPage={paginationResult.elementsPerPage} />
        </>
      );
      debugger;
}

export default PaginationComp
/*
    const { currentPage, maxPageLimit, minPageLimit} = props;
    const totalPages =
*/

/*
function Pagination({ pageSize }) {
    const numberOfSongs = 100;
    const songsPerPage = 10;
    const numberOfPages = numberOfSongs / songsPerPage;


useEffect(() => {


})
};
*/

//export default Pagination