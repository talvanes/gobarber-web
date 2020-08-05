import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border: 2px solid #232129;
  color: #666360;

  width: 100%;
  border-radius: 10px;
  padding: 16px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: #f4dee8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
