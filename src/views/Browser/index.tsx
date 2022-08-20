import Banner from "@src/components/Banner";
import { Center, Margin } from "./styled";
import { ErrorContent, ErrorDiv } from "@src/components/ErrorDiv";
import Header from "@src/components/Header";
import API from "@src/config/api";
import { useEffect, useState } from "react";
import { BannersGrid } from "./styled";

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

const Browser = () => {
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState(null);

  const loadTrending = async () => {
    const response: any = await API.get("/trending")
      .then((value: any) => value.data)
      .catch((value: any) => value.response.data);

    if (response.success) {
      setTrending(response.message);
    } else {
      setError(response.message);
    }
  };

  useEffect(() => {
    loadTrending();
  }, []);

  return (
    <>
      <Header />
      <ErrorDiv>{error && <ErrorContent>{error}</ErrorContent>}</ErrorDiv>
      <Margin />
      <Center>
        <BannersGrid>
          {trending.length > 0 ? (
            trending.map((value: IBanner, idx: number) => (
              <Banner
                key={idx}
                id={value.id}
                title={value.title}
                original_language={value.original_language}
                original_title={value.original_title}
                overview={value.overview}
                poster_path={value.poster_path}
                media_type={value.media_type}
                genre_ids={value.genre_ids}
                release_date={value.release_date}
                vote_average={value.vote_average}
                watched={false}
                wish={false}
              />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </BannersGrid>
      </Center>
    </>
  );
};

export default Browser;
