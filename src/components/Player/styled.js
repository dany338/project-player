import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: 100%;
  z-index: 3;

  .player-track {
    position: absolute;
    top: 0;
    right: 15px;
    left: 15px;
    padding: 13px 22px 10px 184px;
    background-color: #003f63;
    transition: 0.3s ease top;
    z-index: 1;

    &.active {
      top: -92px;
    }
  }

  .player-content {
    position: relative;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 30px 80px #656565;
    z-index: 2;
  }
`;
