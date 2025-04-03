
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type SidebarProps = {
  className?: string;
};

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && <h1 className="text-xl font-semibold">FlowState</h1>}
        <Button 
          variant="ghost" 
          size="sm" 
          className="ml-auto" 
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
        </Button>
      </div>
      
      <div className="flex-1 overflow-auto p-4">
        {collapsed ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="w-8 h-8 rounded-md bg-sidebar-accent/50"></div>
            <div className="w-8 h-8 rounded-md bg-sidebar-accent/50"></div>
            <div className="w-8 h-8 rounded-md bg-sidebar-accent/50"></div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-sidebar-foreground/60">MAIN NAVIGATION</h2>
              <div className="space-y-1">
                <div className="bg-sidebar-accent/50 h-8 rounded-md px-3 flex items-center text-sm">Dashboard</div>
                <div className="h-8 rounded-md px-3 flex items-center text-sm text-sidebar-foreground/80">Projects</div>
                <div className="h-8 rounded-md px-3 flex items-center text-sm text-sidebar-foreground/80">Analytics</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-sidebar-foreground/60">WORKSPACE</h2>
              <div className="space-y-1">
                <div className="h-8 rounded-md px-3 flex items-center text-sm text-sidebar-foreground/80">Settings</div>
                <div className="h-8 rounded-md px-3 flex items-center text-sm text-sidebar-foreground/80">Members</div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 border-t border-sidebar-border">
        {!collapsed && <p className="text-xs text-sidebar-foreground/60">[Sidebar Navigation Goes Here]</p>}
      </div>
    </aside>
  );
};

export default Sidebar;
