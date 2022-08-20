import Stars from "../Stars";
import {
  Card,
  CardContent,
  CardDescribe,
  CardOverview,
  CardTitle,
} from "./styled";

interface IBanner {
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: Array<number>;
  release_date: string;
  vote_average: number;
  watched: boolean;
  wish: boolean;
}

const Banner = (props: IBanner) => {
  return (
    <Card image_path={props.poster_path}>
      <CardContent>
        <CardTitle>{props.title}</CardTitle>
        <Stars rating={props.vote_average} />
        <CardDescribe>
          {props.release_date ? `${props.release_date.split("-")[0]} | ` : ""}
          {props.vote_average ? `${props.vote_average.toPrecision(2)} | ` : ""}
          {props.media_type ? `${props.media_type.toUpperCase()} | ` : ""}
          {props.original_language
            ? `${props.original_language.toUpperCase()}`
            : ""}
        </CardDescribe>
        <CardOverview>{props.overview}</CardOverview>
      </CardContent>
    </Card>
  );
};

export default Banner;
