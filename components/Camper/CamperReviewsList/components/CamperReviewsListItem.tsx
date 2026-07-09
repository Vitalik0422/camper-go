import { Review } from '@/types/camper';
import css from './CamperReviewsListItem.module.css';
import RateStar from './RateStar';

interface CamperReviewsListItemProps {
  review: Review;
}

const CamperReviewsListItem = ({ review }: CamperReviewsListItemProps) => {
  const { reviewer_name, reviewer_rating } = review;

  return (
    <li className={css.camperReviewsListItem}>
      <div className={css.camperReviewHeader}>
        <span className={css.reviewerAvatar}>
          {reviewer_name.charAt(0).toLocaleUpperCase()}
        </span>
        <div>
          <h3 className={css.reviewerNameTitle}>{reviewer_name}</h3>
          <RateStar stars={reviewer_rating} />
        </div>
      </div>
      <div></div>
    </li>
  );
};

export default CamperReviewsListItem;
