
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from "@/lib/utils";

type DashboardLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, className }) => {
  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className={cn("flex-1 overflow-auto p-6", className)}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
