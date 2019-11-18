import styled from 'styled-components'

export const Container = styled.div`
  height: 12px;
  margin-bottom: 3px;
  overflow: hidden;

  #current-time, #track-length {
    color: transparent;
    font-size: 11px;
    background-color: #ffe8ee;
    border-radius: 10px;
    transition: 0.3s ease all;

    &.active {
      color: #009dfb !important;
      background-color: transparent !important;
    }
  }

  #current-time {
    float: left;
  }

  #current-length {
    float: right;
  }
`;
