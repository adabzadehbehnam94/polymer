import Topbar from "../components/topbar";
import Sidebar from "../components/sidebar";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Topbar/>
      <div className=" mt-5 grid md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-3 mb-10">
        <div className="hidden sm:flex sm:col-span-1 lg:col-span-2 xl:col-span-1">
          <Sidebar />
        </div>
        <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5">
          {children}
        </div>
      </div>
    </>

  );
}
