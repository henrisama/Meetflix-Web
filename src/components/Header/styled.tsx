import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderDiv = styled.div`
  position: absolute;
  padding: 0px 20px;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //background-color: gray;
  z-index: 99;
`;

export const HeaderLinks = styled.div``;

export const HeaderLink = styled(Link)`
  margin: 0px 10px;
  text-decoration: none;
  outline: none;
  color: #fafafa;
  opacity: 0.9;

  :hover {
    opacity: 1;
  }
`;

export const HeaderSearchBar = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchField = styled.input`
  margin: 0px 10px;
  width: 200px;
  height: 30px;
  border-radius: 10px;
  border: none;
  padding: 0px 15px;
  outline: none;
`;

export const LogoutButton = styled(FiLogOut)`
  font-size: 35pt;
  margin: 0px 10px;
  cursor: pointer;
`;
