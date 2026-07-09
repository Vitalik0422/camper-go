import Icon from '@/shared/ui/Icon/Icon';

interface RateStarProps {
  stars: number;
}

const RateStar = ({ stars }: RateStarProps) => {
  const mapStar = [];
  for (let index = 1; index <= 5; index++) {
    if (index <= stars) mapStar.push(<Icon name="star" key={index} />);
    mapStar.push(<Icon name="unStar" key={index} />);
  }
  return mapStar.join();
};

export default RateStar;
