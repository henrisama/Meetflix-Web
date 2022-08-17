import styled from "styled-components";

interface ContainerProps {
  height?: string;
  maxHeight?: string;
  width?: string;
  margin?: string;
  padding?: string;
  display?: string;
  justifyContent?: string;
  backgroundColor?: string;
  alignItems?: string;
  textAlign?: string;
}

export const Container = styled.div<ContainerProps>`
  height: ${(props) => (props.height ? props.height : "100%")};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : "")};
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  display: ${(props) => (props.display ? props.display : "block")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "none"};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ""};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "")};
`;
