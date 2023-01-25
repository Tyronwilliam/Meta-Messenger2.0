import "../styles/globals.css";
import Header from "./Component/Head/Header";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
