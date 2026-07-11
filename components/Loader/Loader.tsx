import Spinner from '../Spinner/Spinner';
import css from './Loader.module.css';
const Loader = () => {
  return (
    <div className={css.backDrop}>
      <div className={css.loaderWrapper}>
        <Spinner />
        <div className={css.loaderText}>
          <h2 className={css.loaderTitle}>Loading tracks...</h2>
          <p className={css.loaderText}>
            Please wait while we fetch the best travel trucks for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
