import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../lib/config/firebase';

export default function Login() {
    const signIn = async (event) => {
        event.preventDefault();

        await auth.signInWithPopup(provider)
        .catch((error) => {
            alert(error.message);
        });
    }

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img 
                    src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg' 
                    alt='Slack Logo'
                />
                <h1>Sign in to Slack (clone)</h1>
                <p>We suggest using the <span>email address you use at work.</span></p>

                <button onClick={signIn}>
                    Sign In With Google
                </button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    background-color: #F8F8F8;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > h1 {
        margin-bottom: 10px;
    }

    > p > span {
        font-weight: 600;
    }

    > button {
        margin-top: 30px;
        text-transform: inherit;
        font-size: 1rem;
        font-weight: 500;
        background-color: #3F0F40;
        color: white;
        border: none;
        outline: none;
        padding: 10px 20px;
        border-radius: 3px;
        cursor: pointer;
    }
`;
