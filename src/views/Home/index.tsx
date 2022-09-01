import { Center } from "@src/components/Center";
import {
  HomeDiv,
  HomeLoginLink,
  HomeText,
  HomeTitle,
  HomeWellcome,
} from "./styled";

const Home = () => {
  return (
    <HomeDiv>
      <HomeLoginLink to="/signin">Login</HomeLoginLink>
      <Center>
        <HomeWellcome>
          <HomeText>Wellcome to</HomeText>
          <HomeTitle>Meetflix</HomeTitle>
        </HomeWellcome>
      </Center>
    </HomeDiv>
  );
};

export default Home;
