import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: -40px;
  width: 115px;
  height: 115px;
  margin-left: 40px;
  -webkit-transform: rotateZ(0);
  transform: rotateZ(0);
  transition: 0.3s ease all;
  box-shadow: 0 0 0 10px #fff;
  border-radius: 50%;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    width: 20px;
    height: 20px;
    margin: -10px auto 0 auto;
    background-color: #d6dee7;
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px #fff;
    z-index: 2;
  }

  &.active {
    top: -60px;
    box-shadow: 0 0 0 4px #fff7f7, 0 30px 50px -15px #afb7c1;
  }

  img, #buffer-box {
    transition: 0.1s linear all;
  }

  img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: -1;

    &.active {
      opacity: 1;
      z-index: 1;
    }
  }
`;
