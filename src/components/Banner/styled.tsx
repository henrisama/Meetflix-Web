import styled from "styled-components";

interface CardInterface {
  image_path?: string;
}

export const Card = styled.div<CardInterface>`
  margin: 10px;
  width: 200px;
  height: 300px;
  background-image: url(${(props) =>
    props.image_path
      ? "https://image.tmdb.org/t/p/w500/" + props.image_path
      : ""});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  transition: all 0.4s linear;
  -webkit-transition: all 0.4s linear;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: end;

  :hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
  }
`;

export const CardContent = styled.div`
  display: block;
  padding: 10px;
  background: linear-gradient(transparent, black, black);
  border-radius: 8px;
`;

export const CardTitle = styled.h3`
  text-align: start;
  padding: 10px 0px;
  color: white;
`;

export const CardDescribe = styled.div`
  padding: 5px 0px;
  display: flex;
  font-size: 10pt;
  text-align: start;
  justify-content: start;
  font-size: 8pt;
  color: white;
`;

export const CardOverview = styled.p`
  padding: 5px 0px 0px 0px;
  text-align: start;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 10pt;
  color: white;
`;
