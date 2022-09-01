import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeDiv = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("/img/home-background.jpg");
  background-position: center;
  background-size: cover;
`;

export const HomeWellcome = styled.div`
  p {
    font-weight: bold;
    text-align: center;
  }
`;

export const HomeTitle = styled.p`
  font-size: 150pt;
  text-shadow: 15px 15px black;
`;

export const HomeText = styled.p`
  font-size: 50pt;
  text-shadow: 5px 5px black;
`;

export const HomeLoginLink = styled(Link)`
  height: 40px;
  width: 100px;
  margin: 20px auto auto calc(100vw - 120px);
  position: absolute;
  background-color: #c70039;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  box-shadow: 5px 5px black;
  color: #d8d8d8;
`;
