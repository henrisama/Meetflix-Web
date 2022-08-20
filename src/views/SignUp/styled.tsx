import styled from "styled-components";

export const SignUpDiv = styled.div`
  height: 650px;
  width: 500px;
  border-radius: 10px;
  box-shadow: #a30a0a 10px 10px;
  display: block;
  background-color: #141425;

  @media (max-width: 550px) {
    width: 300px;
  }

  @media (max-width: 380px) {
    height: 550px;
  }

  @media (max-width: 280px) {
    width: 250px;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 5px 10px 5px 40px;
  margin-top: 10px;
  width: 300px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: none;
  height: 40px;
  outline: none;
  font-size: 12pt;
  background-color: #dadada;

  @media (max-width: 550px) {
    width: 250px;
  }

  @media (max-width: 280px) {
    width: 200px;
  }
`;

export const SignUpFormDiv = styled.div`
  display: block;
  //background-color: aqua;
  align-items: center;
  text-align: center;
`;

export const Button = styled.button`
  width: 150px;
  margin-top: 40px;
  text-align: center;
  border-radius: 10px;
  border: none;
  height: 40px;
  outline: none;
  font-size: 12pt;
  cursor: pointer;
  box-shadow: 0 0 1em gold;
  opacity: 0.9;

  :hover {
    opacity: 1;
  }
`;
