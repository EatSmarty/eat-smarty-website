import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Additives',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  );
}
