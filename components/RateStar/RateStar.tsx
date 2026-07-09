import css from './RateStar.module.css';
import Icon from '@/shared/ui/Icon/Icon';
import type { ReactElement } from 'react';

interface RateStarProps {
  stars: number;
}

const RateStar = ({ stars }: RateStarProps) => {
  const mapStar: ReactElement[] = [];
  for (let index = 1; index <= 5; index++) {
    if (index <= stars)
      mapStar.push(<Icon name="star" key={index} width={16} height={16} />);
    else
      mapStar.push(<Icon name="unStar" key={index} width={16} height={16} />);
  }

  return <div className={css.mapStarWrapper}>{mapStar}</div>;
};

export default RateStar;
