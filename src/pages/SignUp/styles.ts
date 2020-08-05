import styled from 'styled-components';

import { shade } from "polished";

import signUpBackground from '../../assets/sign-up-background.png';

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
    color: #f4ede8;
    text-decoration: none;
    margin-top: 24px;

    display: flex;
    align-items: center;

    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#f4ede8')}
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  /* flex-basis: calc(100% - 700px); */

  background: url(${signUpBackground}) no-repeat center;
  background-size: cover;
`;
