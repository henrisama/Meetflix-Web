import styled from "styled-components";
import { MdEdit, MdOutlineSaveAlt } from "react-icons/md";
import { FcEmptyTrash } from "react-icons/fc";

export const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: max-content max-content max-content max-content max-content max-content;
  grid-template-rows: max-content;
  //grid-column-gap: 30px;
  //grid-row-gap: 30px;
  justify-items: center;
  align-items: center;
  //background-color: yellow;

  @media (max-width: 1300px) {
    grid-template-columns: auto auto auto auto;
  }

  @media (max-width: 900px) {
    grid-template-columns: auto auto;
  }
`;

export const ProfilesIconsDiv = styled.div`
  height: 250px;
  width: 250px;

  @media (max-width: 1550px) {
    width: 170px;
    height: 170px;
  }

  @media (max-width: 450px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 350px) {
    width: 80px;
    height: 80px;
  }
`;

export const ProfileCard = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50px;
  background-color: #a53030;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  margin: 20px;
  cursor: pointer;

  p {
    font-size: 30pt;
  }

  @media (max-width: 1550px) {
    width: 170px;
    height: 170px;
  }

  @media (max-width: 450px) {
    width: 120px;
    height: 120px;

    p {
      font-size: 20pt;
    }
  }

  @media (max-width: 350px) {
    width: 80px;
    height: 80px;

    p {
      font-size: 12pt;
    }
  }
`;

export const ProfileEditIcon = styled(MdEdit)`
  margin-top: 10px;
  cursor: pointer;
  font-size: 50pt;
  opacity: 0.6;

  @media (max-width: 1500px) {
    font-size: 30pt;
  }

  :hover {
    opacity: 1;
  }
`;

export const ProfileRemoveIcon = styled(FcEmptyTrash)`
  margin-top: 10px;
  cursor: pointer;
  font-size: 50pt;
  opacity: 0.6;

  @media (max-width: 1500px) {
    font-size: 30pt;
  }

  :hover {
    opacity: 1;
  }
`;

export const AbsoluteDiv = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-200px);
  transition: 0.5s;

  div {
    margin: 0px;
    padding: 0px;
    display: flex;
  }
`;

export const Input = styled.input`
  padding: 5px 20px 5px 20px;
  //margin-top: 10px;
  width: 300px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: none;
  height: 40px;
  outline: none;
  font-size: 12pt;
  background-color: #dadada;

  @media (max-width: 650px) {
    width: 200px;
    height: 30px;
    font-size: 11pt;
  }
`;

export const ProfileNameProfileIcon = styled(MdOutlineSaveAlt)`
  font-size: 30pt;
  cursor: pointer;
  margin-left: 20px;
  opacity: 0.6;

  @media (max-width: 650px) {
    font-size: 25pt;
  }

  :hover {
    opacity: 1;
  }
`;
