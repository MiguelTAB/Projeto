import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { searchMusics } from "../../redux/actions/musics";
import { useDispatch } from "react-redux";

const S = {
        SearchbarStyle: styled(TextField)`
        width: 40%;
        margin-left: 10px !important;
      `};

export default function Searchbar() {
        const [stringToSearch, setStringToSearch] = useState("");
        const Dispatch = useDispatch();

        const fnSearch = function (oEvent) {
                setStringToSearch(oEvent.target.value);
                Dispatch(searchMusics(oEvent.target.value));
              }

        return (
                <>{<S.SearchbarStyle value={stringToSearch} onChange={fnSearch} label="Search song" type="search" />}</>
                );
            
}
