import css from './CamperPage.module.css';
import CamperDetails from '@/components/Camper/CamperDetails/CamperDetails';
import CamperGallery from '@/components/Camper/CamperGallery/CamperGallery';
import CamperReviewsList from '@/components/Camper/CamperReviewsList/CamperReviewsList';
import { getCamper, getReviews } from '@/lib/api/camperServices';
interface CamperDetails {
  params: Promise<{ id: string }>;
}

const Camper = async ({ params }: CamperDetails) => {
  const { id } = await params;
  const camper = await getCamper(id);
  const reviews = await getReviews(id);

  return (
    <>
      <div className={css.camperPageFirstRow}>
        <CamperGallery photos={camper.gallery} />
        <CamperDetails camper={camper} />
      </div>
      <div className={css.camperPageSecondRow}>
        <h2>Reviews</h2>
        <div className={css.reviewsWrapper}>
          <CamperReviewsList reviews={reviews} />
        </div>
      </div>
    </>
  );
};

export default Camper;
