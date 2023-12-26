'use client'

import styled from "styled-components";

export const ClientOrDentistContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    & button {
        border: none;
        cursor: pointer;
    }
    
    & .title {
        font-weight: bold;
        text-align: center;
    }

    & .sub-title {
        display: flex;
        flex-direction: column;
        text-align: right;
        color: black;
    }

    & .card_function {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 4rem;

        & .card_function_content{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            padding: 4rem;

            & p {
                font-weight: bold;
            }
        }
    }
`