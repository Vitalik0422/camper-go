'use client';
import clsx from 'clsx';
import css from './not-found.module.css';
import Image from 'next/image';
import Button from '@/components/UI/Button/Button';
import { useRouter } from 'next/navigation';
const NotFound = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <section className={css.notFoundSection}>
      <div className={clsx('container', css.notFoundContainer)}>
        <Image
          src="/not-found.png"
          alt="Not found image"
          width={488}
          height={463}
        />
        <div className={css.notFoundDescription}>
          <h2 className={css.notFoundTitle}> Page not found 404</h2>
          <p className={css.notFoundDescription}>
            The page you are looking for does not exist or has been moved. Try
            going back or use the search to find what you need.
          </p>
        </div>
        <div className={css.notFoundButtonWrapper}>
          <Button primary onClick={handleBack}>
            Go back
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
