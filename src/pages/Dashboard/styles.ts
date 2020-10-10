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

export const Content = styled.main`
  max-width: 70rem;
  margin: 4rem auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 7.5rem;

  h1 {
    font-size: 2.25em;
  }

  p {
    margin-top: 0.5rem;
    color: #ff9000;
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 0.75rem;
      background-color: #ff9000;
      margin: 0 0.5rem;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 4rem;

  > strong {
    color: #999591;
    font-size: 1.25em;
    font-weight: 400;
  }

  div {
    background-color: #3e3b47;
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    border-radius: 0.625em;
    margin-top: 1.5rem;
    position: relative;

    &::before {
      position: absolute;
      content: '';
      height: 80%;
      width: 1px;
      left: 0;
      top: 10%;
      background: #ff9000;
    }

    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
    }

    strong {
      margin-left: 1.5rem;
      color: white;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #999591;

      svg {
        color: #ff9000;
        margin-right: 0.5rem;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 3rem;

  > strong {
    color: #999591;
    font-size: 1.25em;
    line-height: 1.625em;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 1rem;
  }

  span {
    display: flex;
    align-items: center;
    color: #f4ede8;

    svg {
      color: #ff9000;
      margin-right: 0.5rem;
    }
  }

  div {
    flex: 1;
    background-color: #3e3b47;
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    border-radius: 0.625em;
    margin-left: 1.5rem;

    img {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
    }

    strong {
      margin-left: 1.5rem;
      color: white;
      font-size: 1.25rem;
    }
  }
`;

export const Calendar = styled.aside`
  width: 23.75rem;
`;
