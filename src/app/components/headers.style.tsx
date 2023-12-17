"use client"

import { styled } from "styled-components"

export const HeaderHomeStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.25rem;

    & button {
        background-color: transparent;
        border: none;
        color: black;
        cursor: pointer;
        font-size: medium;
    }
`;

export const HeaderButtonBack = styled.div`
    padding: 1.25rem;
`

export const Wrapper = styled.div`
    padding: 1rem;
`