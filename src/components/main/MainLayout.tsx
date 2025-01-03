"use client";
import Navbar from "./Navbar/Navbar";
import ToggleMenuItem from "./ToggleMenuItem";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 mt-4">
      <Navbar />
      <main className="mt-10">{children}</main>
      <ToggleMenuItem />
    </div>
  );
};

export default MainLayout;
