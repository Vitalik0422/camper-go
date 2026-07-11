import Button from '../UI/Button/Button';
import css from './NotFoundCampers.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const NotFoundCampers = () => {
  const router = useRouter();
  const handleResetFilter = () => router.push('/catalog');
  return (
    <div className={css.notFoundWrapper}>
      <Image src="/not-found.png" alt={''} width={488} height={463} />
      <div className={css.notFoundDescription}>
        <h2 className={css.notFoundTitle}>No campers found</h2>
        <p className={css.notFoundDescription}>
          We couldn`t find any campers that match your filters. Try adjusting
          your search or clearing some filters.
        </p>
      </div>
      <div className={css.notFoundButtonWrapper}>
        <Button primary onClick={handleResetFilter} className="">
          Clear filters
        </Button>
        <Button type="button">View all campers</Button>
      </div>
    </div>
  );
};

export default NotFoundCampers;
