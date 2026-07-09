import css from './CamperReviewsList.module.css';
import { Review } from '@/types/camper';
import CamperReviewsListItem from './components/CamperReviewsListItem';

interface CamperReviewsListProps {
  reviews: Review[];
}

const CamperReviewsList = async ({ reviews }: CamperReviewsListProps) => {
  return (
    <ul className={css.reviewerList}>
      {reviews.map((review) => (
        <CamperReviewsListItem key={review.id} review={review} />
      ))}
    </ul>
  );
};

export default CamperReviewsList;
