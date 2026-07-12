import CamperDetails from '@/components/CamperDetails/CamperDetails';
import css from './CamperPage.module.css';
import CamperGallery from '@/components/CamperGallery/CamperGallery';
import { getCamper, getReviews } from '@/lib/api/camperServices';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CamperReviewsList from '@/components/CamperReviewsList/CamperReviewsList';
import CamperOrderForm from '@/components/CamperForm/CamperOrderForm';

interface CamperPageProps {
  params: Promise<{ camperId: string }>;
}

export const generateMetadata = async ({
  params,
}: CamperPageProps): Promise<Metadata> => {
  const { camperId } = await params;
  const camper = await getCamper(camperId).catch(() => null);

  if (!camper) {
    return {
      title: 'Camper Not Found | Campers',
      description: 'The requested camper could not be found in the catalog.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${camper.name} | Campers`;
  const description = `${camper.description} Location: ${camper.location}. Price: ${camper.price} EUR/day.`;
  const image = camper.coverImage || camper.gallery[0]?.original;
  const pageUrl = process.env.NEXT_PUBLIC_BACKEND_URL
    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/catalog/${camper.id}`
    : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      siteName: 'Campers',
      url: pageUrl,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: camper.name,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image
        ? [
            {
              url: image,
              alt: camper.name,
            },
          ]
        : undefined,
    },
  };
};

const CamperPage = async ({ params }: CamperPageProps) => {
  const { camperId } = await params;
  const [camper, reviews] = await Promise.all([
    getCamper(camperId).catch(() => null),
    getReviews(camperId).catch(() => []),
  ]);

  if (!camper) notFound();

  return (
    <div className={css.camperDetailPageWrapper}>
      <div className={css.camperPageFirstRow}>
        <CamperGallery photos={camper.gallery} />
        <CamperDetails camper={camper} />
      </div>
      <div className={css.camperPageSecondRow}>
        <h2>Reviews</h2>
        <div className={css.reviewsWrapper}>
          <CamperReviewsList reviews={reviews} />
          <CamperOrderForm camperId={camper.id} />
        </div>
      </div>
    </div>
  );
};

export default CamperPage;
