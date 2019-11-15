import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  width: 90%;
  height: 100px;
  margin: -4px auto;

  .bg-artwork {
    background-color: #0093E9;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
    position: fixed;
    top: -30px;
    right: -30px;
    bottom: -30px;
    left: -30px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    filter: blur(40px);
    -webkit-filter: blur(40px);
    z-index: 1;
  }

  .bg-layer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    opacity: 0.51;
    z-index: 2;
  }
`;
