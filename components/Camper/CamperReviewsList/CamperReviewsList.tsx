import { Review } from '@/types/camper';
import CamperReviewsListItem from './components/CamperReviewsListItem';

interface CamperReviewsListProps {
  reviews: Review[];
}

const CamperReviewsList = async ({ reviews }: CamperReviewsListProps) => {
  return (
    <ul>
      {reviews.map((review) => (
        <CamperReviewsListItem key={review.id} review={review} />
      ))}
    </ul>
  );
};

export default CamperReviewsList;
