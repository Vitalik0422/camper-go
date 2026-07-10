import css from './layout.module.css';
import clsx from 'clsx';

const CatalogLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className={css.sectionCatalog}>
      <div className={clsx('container', css.catalogContainer)}>{children}</div>
    </section>
  );
};

export default CatalogLayout;
