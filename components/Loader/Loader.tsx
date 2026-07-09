import css from './Loader.module.css';
const loading = () => {
  return (
    <div className={css.backDrop}>
      <div className={css.loaderWrapper}>
        <div className={css.spinner} />
        <div className={css.spinnerText}>
          <h2 className={css.spinnerTitle}>Loading tracks...</h2>
          <p className={css.loaderText}>
            Please wait while we fetch the best travel trucks for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default loading;
