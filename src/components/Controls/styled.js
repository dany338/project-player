import styled from 'styled-components'

export const Container = styled.div`
  width: 250px;
  height: 100%;
  margin: 0 5px 0 141px;
  float: right;
  overflow: hidden;

  .control {
    width: 33.333%;
    float: left;
    padding: 12px 0;

    .button, .button i {
      transition: 0.2s ease all;
    }

    .button {
      width: 26px;
      height: 26px;
      padding: 25px;
      background-color: #fff;
      cursor: pointer;
    }

    .button i {
      display: block;
      color: #004066;
      font-size: 26px;
      text-align: center;
      line-height: 1;
    }
  }
`;
