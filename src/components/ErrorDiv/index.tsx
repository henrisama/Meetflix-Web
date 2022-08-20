import styled from "styled-components";

export const ErrorDiv = styled.div`
  position: absolute;
  width: 100%;
  //  background-color: #ed4337;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

export const ErrorContent = styled.div`
  //position: fixed;
  background-color: #ed4337;
  height: 60px;
  min-width: 300px;
  padding: 0 30px 0 30px;
  width: fit-content;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;

  p {
    font-size: 12pt;
    margin-right: 20px;
  }
`;

export const ErrorTimeout = styled.div`
  //position: fixed;
  height: 2px;
  margin-top: 5px;
  width: 100%;
  padding: 0 10px 0 10px;

  //background-color: white;

  div {
    width: 100%;
    height: 2px;
    background-color: white;
  }
`;
