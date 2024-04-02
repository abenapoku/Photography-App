export default function ourWorkLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <section>
        {children}
      </section>
    );
  }
  