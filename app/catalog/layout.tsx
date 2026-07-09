import css from './layout.module.css';
import SideBar from '@/components/SideBar/SideBar';
import { getFilterCamper } from '@/lib/api/camperServices';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import clsx from 'clsx';

const CatalogLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['filter'],
    queryFn: getFilterCamper,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className={css.sectionCatalog}>
        <div className={clsx('container', css.catalogContainer)}>
          <SideBar />
          {children}
        </div>
      </section>
    </HydrationBoundary>
  );
};

export default CatalogLayout;
