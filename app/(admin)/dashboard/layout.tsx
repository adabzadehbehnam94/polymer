
import Sidebar from "../../components/sidebar";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-3 mb-10 container mx-auto px-5">
        <div className="hidden sm:flex sm:col-span-1 lg:col-span-2 xl:col-span-1">
          <Sidebar />
        </div>
        <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 mb-10">
          {children}
        </div>
      </div>

  );
}
