"use client"

import styled from "styled-components";

export const HomeContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden;
gap: 0;
height: 90vh;

& p {
    font-weight: bold;
    text-align: center;
}
& span {
    display: flex;
    flex-direction: column;
    text-align: right;
    color: black;
}

& button {
    background-color: #9747FF;
    color: white;
    border: none;
    padding: 1rem 3rem;
    border-radius: 2rem;
}
`