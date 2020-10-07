import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 2rem 0;
  background-color: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 5rem;
  }

  button {
    margin-left: auto;
    background-color: transparent;
    border: none;

    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: #999591;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    line-height: 1.5rem;

    span {
      color: #f4ede8;
    }

    strong {
      color: #ff9000;
    }
  }
`;
