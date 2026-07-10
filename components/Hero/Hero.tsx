import Button from '../UI/Button/Button';
import css from './Hero.module.css';
import clsx from 'clsx';

const Hero = () => {
  return (
    <section>
      <div className={clsx('container', css.heroContainer)}>
        <div className={css.heroDescription}>
          <h1 className={css.heroTitle}>Campers of your dreams</h1>
          <p className={css.heroText}>
            You can find everything you want in our catalog
          </p>
        </div>
        <Button href="/catalog" className={css.heroButton}>
          View Now
        </Button>
      </div>
      ;
    </section>
  );
};

export default Hero;
