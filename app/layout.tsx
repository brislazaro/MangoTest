import "./app.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="container" lang="en">
      <body>{children}</body>
    </html>
  );
}
