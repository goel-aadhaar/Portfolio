export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-12 md:py-20">
      {children}
    </main>
  );
}
