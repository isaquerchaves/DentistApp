"use client"

import { styled } from "styled-components";

export const ContentLoginStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    align-items: center;
    height: 90vh;

    & form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    & input {
        background-color: transparent;
        border: none;
    }
    
    & button {
    background-color: #9747FF;
    color: white;
    border: none;
    padding: 1rem 3rem;
    border-radius: 2rem;
    cursor: pointer;
}
`;

export const CardInput = styled.div`
    background-color: white;
    border: 1px solid #B2B2B2;
    border-radius: 0.7rem;
    width: 70vw;
    margin: 1rem;
    padding: 0.625rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    
    & input::placeholder {
        color: black;
    }
`;

