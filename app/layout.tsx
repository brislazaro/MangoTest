import "./app.css";

export const metadata = {
  title: "Mango Test Brisa",
  description: "This is Brisa's technical test for Mango.",
  icons: {
    icon: "/favicon.ico",
  },
};

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
