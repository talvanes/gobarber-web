import styled from 'styled-components';

import { shade } from "polished";

import signInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;

  display: flex;
  flex-direction: column;

  /* place-content: center; */

  align-items: center;
  justify-content: center;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #232129;
      border: 2px solid #232129;
      color: #f4dee8;

      width: 100%;
      border-radius: 10px;
      padding: 16px;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #ff9000;
      color: #312e38;
      border: none;
      width: 100%;
      height: 56px;
      border-radius: 10px;
      padding: 0 16px;
      font-weight: 500;
      margin-top: 16px;

      transition: background-color 0.2s;

      &:hover {
        background-color: ${shade(0.2, '#ff9000')}
      }
    }

    a {
      color: #f4dee8;
      text-decoration: none;

      display: block;
      margin-top: 24px;

      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4dee8')}
      }
    }
  }

  > a {
    color: #ff9000;
    text-decoration: none;
    margin-top: 24px;

    display: flex;
    align-items: center;

    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')}
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  /* flex-basis: calc(100% - 700px); */

  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
