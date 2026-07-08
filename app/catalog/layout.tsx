import SideBar from '@/components/SideBar/SideBar';

export default function CatalogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideBar />
      {children}
    </>
  );
}
