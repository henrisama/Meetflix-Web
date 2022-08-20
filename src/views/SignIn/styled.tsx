import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignInDiv = styled.div`
  height: 500px;
  width: 1000px;
  border-radius: 10px;
  box-shadow: #a30a0a 10px 10px;
  display: flex;
  background-color: #141425;

  @media (max-width: 1100px) {
    height: 300px;
    width: 700px;
  }

  @media (max-width: 750px) {
    display: block;
    height: fit-content;
    width: 300px;
  }

  @media (max-width: 280px) {
    width: 250px;
  }
`;

export const SignInFormDiv = styled.div`
  //width: 100%;
  display: block;
`;

export const SignInFormTitle = styled.h1`
  font-size: 30pt;
  margin-bottom: 20px;

  @media (max-width: 1100px) {
    font-size: 20pt;
  }
`;

export const Input = styled.input`
  padding: 5px 10px 5px 40px;
  //margin-top: 10px;
  width: 300px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: none;
  height: 40px;
  outline: none;
  font-size: 12pt;
  background-color: #dadada;

  @media (max-width: 1100px) {
    width: 200px;
    height: 30px;
    font-size: 11pt;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  font-size: 12pt;
  cursor: pointer;
  color: #a0a0a0;

  :hover {
    color: gray;
  }

  @media (max-width: 1100px) {
    font-size: 10pt;
  }
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
  //box-shadow: 2px 2px 1px gray;
  opacity: 0.9;

  :hover {
    opacity: 1;
  }

  @media (max-width: 1100px) {
    width: 100px;
    height: 30px;
    font-size: 11pt;
  }
`;

interface ButtonProps {
  backgorundColor: string;
}

export const SignInSocialButton = styled.button<ButtonProps>`
  width: 300px;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 10px 0;
  opacity: 0.9;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
  background-color: ${(props) => props.backgorundColor};
  color: white;
  text-align: center;

  :hover {
    opacity: 1;
  }

  @media (max-width: 1100px) {
    width: 200px;
    font-size: 10pt;
    padding-left: 40px;
  }
`;

export const HalfDiv = styled.div`
  width: 50%;

  @media (max-width: 750px) {
    width: 100%;
    padding: 30px 0px;
  }
`;
