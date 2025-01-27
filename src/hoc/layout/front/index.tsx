import { ReactNode } from 'react';
import Header from '@/components/header';

const FrontLayout = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <>
      <title>{title ? `${title} | app name` : 'app name'}</title>
      <Header />
      <main className="p-5">{children}</main>
    </>
  );
};

export default FrontLayout;
