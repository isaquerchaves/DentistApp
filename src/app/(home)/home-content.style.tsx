"use client"

import styled from "styled-components";

export const HomeContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

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
    cursor: pointer;
}
@media (max-width: 480px){
    display: flex;
    flex-direction: column;
    padding: 1rem;

    & p, span {
        font-size: small;
    }

    &.image-small {
            width: 100px;
            height: 100px;
        }
}
`