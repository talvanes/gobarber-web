import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    /* CSS Hack - Tooltips at their half position */
    left: 50%;
    transform: translateX(-50%);
    /* CSS Hack */

    background-color: #ff9000;
    color: #312e38;
    padding: 8px;
    border-radius: 4px;
    font-size: 0.875em;
    font-weight: 500;

    opacity: 0;
    transition: opacity 0.4s;

    &::before {
      /* CSS Hack - To show tooltip arrow */
      position: absolute;
      top: 100%;
      bottom: 20px;
      /* CSS Hack */
      /* CSS Hack - To center the arrow, as in the toolbox */
      left: 50%;
      transform: translateX(-50%);
      /* CSS Hack */

      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
