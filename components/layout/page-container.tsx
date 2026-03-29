import { ReactNode } from 'react';

export const PageContainer = async ({ children }: { children: ReactNode }) => {
  return (
    <main id='main-content' className='p-4'>
      {children}
    </main>
  );
};
