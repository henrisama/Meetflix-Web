import { useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Div } from "./styled";

interface IStars {
  rating: number;
}

const Stars = (props: IStars) => {
  const { rating } = props;
  const [rate, setrate] = useState(0);

  useEffect(() => {
    setrate(Math.round(rating * 0.5 * 2) / 2);
  }, [rate, rating]);

  return (
    <Div>
      {Array(5)
        .fill(0)
        .map(function (item, i) {
          if (rate - i > 0.5) {
            return <BsStarFill size={12} key={i} color="gold" />;
          } else if (rate - i === 0.5) {
            return <BsStarHalf size={12} key={i} color="gold" />;
          } else {
            return <BsStar size={12} key={i} color="gold" />;
          }
        })}
    </Div>
  );
};

export default Stars;
