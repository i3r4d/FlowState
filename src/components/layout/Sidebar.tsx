
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  ArrowRight, 
  LayoutDashboard, 
  Plus, 
  Settings, 
  HelpCircle 
} from "lucide-react";
import { cn } from "@/lib/utils";

type SidebarProps = {
  className?: string;
};

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");

  const navItems = [
    { id: "dashboard", label: "All Workbenches", icon: <LayoutDashboard size={18} /> },
    { id: "create", label: "+ Create New", icon: <Plus size={18} /> },
    { id: "settings", label: "Settings", icon: <Settings size={18} /> },
    { id: "help", label: "Help", icon: <HelpCircle size={18} /> },
  ];

  const handleNavClick = (id: string) => {
    setActiveItem(id);
  };

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
        <nav className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                collapsed ? "justify-center" : "justify-start",
                activeItem === item.id 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )}
            >
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t border-sidebar-border">
        {!collapsed && <p className="text-xs text-sidebar-foreground/60">FlowState v1.0</p>}
      </div>
    </aside>
  );
};

export default Sidebar;
