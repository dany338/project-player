import styled from 'styled-components'

export const Container = styled.div`
  background-color: #d7f0ff;
  cursor: pointer;

  .ins-time {
    position: absolute;
    top: -29px;
    color: #fff;
    font-size: 12px;
    white-space: pre;
    padding: 5px 6px;
    border-radius: 4px;
    display: none;
  }

  .s-hover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    opacity: 0.2;
    z-index: 2;
  }

  .seek-bar {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0;
    background-color: #04a1fb;
    transition: 0.2s ease width;
    z-index: 1;
  }
`;
