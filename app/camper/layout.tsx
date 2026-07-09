import clsx from 'clsx';
import css from './CamperLayout.module.css';
const CamperLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <section className={css.camperSection}>
        <div className={clsx('container', css.camperContainer)}>{children}</div>
      </section>
    </>
  );
};

export default CamperLayout;
