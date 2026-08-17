// import "./globals.css";
import Footer from "../components/footer";
import Header from "../components/header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="bg-[#0b1113]">
          <Header/>
          {children}
          <Footer />
      </div>
  );
}
