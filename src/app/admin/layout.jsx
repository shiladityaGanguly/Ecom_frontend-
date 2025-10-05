import Sidebar from "@/components/sidebar";
import "@/app/globals.css";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 md:ml-18 p-4 transition-all duration-300 mt-10">
        {children}
      </main>
    </div>
  );
}
