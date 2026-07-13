import Topbar from "../components/topbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
          <Topbar/>
          {children}
      </>
  );
}
