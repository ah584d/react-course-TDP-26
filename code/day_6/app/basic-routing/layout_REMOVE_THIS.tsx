export default function BasicRoutingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="basic-routing-layout" style={{ border: '2px dashed #61dafb', padding: '1rem', margin: '1rem', borderRadius: '8px' }}>
      <h2 style={{ color: '#61dafb', marginBottom: '1rem' }}>Basic Routing Section Layout</h2>
      <nav style={{ marginBottom: '1rem' }}>
        <em>This layout only applies to pages inside basic-routing/</em>
      </nav>
      <main className="content">
        {children}
      </main>
    </div>
  );
}