import css from './CamperGallery.module.css';
import { Gallery } from '@/types/camper';
import Image from 'next/image';
interface CamperGalleryProps {
  photos: Gallery[];
}

const CamperGallery = ({ photos }: CamperGalleryProps) => {
  console.log(photos);
  return (
    <div className={css.camperGalleryWrapper}>
      {photos.length > 1 && (
        <Image
          src={photos[0].original}
          alt="Camper outside photo"
          width={638}
          height={505}
          className={css.camperMainPhotoGallery}
        />
      )}
      <div className={css.camperSliderWrapper}>
        {photos.length > 0 &&
          photos.map((photo) => (
            <Image
              key={photo.id}
              src={photo.thumb}
              alt="Camper photo"
              width={136}
              height={144}
              className={css.camperGalleryItem}
            />
          ))}
      </div>
    </div>
  );
};

export default CamperGallery;
