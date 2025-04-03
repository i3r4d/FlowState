
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
import CreateWorkbenchModal from '@/components/workbench/CreateWorkbenchModal';
import { motion } from 'framer-motion';

type SidebarProps = {
  className?: string;
};

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const navItems = [
    { id: "dashboard", label: "All Workbenches", icon: <LayoutDashboard size={18} /> },
    { id: "create", label: "+ Create New", icon: <Plus size={18} /> },
    { id: "settings", label: "Settings", icon: <Settings size={18} /> },
    { id: "help", label: "Help", icon: <HelpCircle size={18} /> },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'create') {
      setIsCreateModalOpen(true);
    } else {
      setActiveItem(id);
    }
  };

  const handleCreateWorkbench = (name: string) => {
    console.log("Creating new workbench:", name);
    // In a real app, this would dispatch an action or call an API
  };

  const sidebarVariants = {
    expanded: {
      width: '16rem',
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    collapsed: {
      width: '4rem',
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.3,
        ease: "easeOut" 
      }
    }
  };

  const navListVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.aside
      className={cn(
        "h-screen bg-sidebar border-r border-sidebar-border",
        collapsed ? "w-16" : "w-64",
        className
      )}
      variants={sidebarVariants}
      animate={collapsed ? "collapsed" : "expanded"}
      initial={false}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <motion.h1 
            className="text-xl font-bold font-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            FlowState
          </motion.h1>
        )}
        <Button 
          variant="ghost" 
          size="sm" 
          className={cn(
            "transition-all duration-300 hover:bg-sidebar-accent/80",
            collapsed ? "mx-auto" : "ml-auto"
          )}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
        </Button>
      </div>
      
      <div className="flex-1 overflow-auto p-4">
        <motion.nav
          className="space-y-2"
          variants={navListVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-200",
                collapsed ? "justify-center" : "justify-start",
                activeItem === item.id 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground hover:translate-x-0.5"
              )}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span 
                className="flex items-center justify-center"
                whileHover={{ rotate: activeItem === item.id || item.id !== "create" ? 0 : 90 }}
                transition={{ duration: 0.2 }}
              >
                {item.icon}
              </motion.span>
              {!collapsed && <span className="font-sans">{item.label}</span>}
            </motion.button>
          ))}
        </motion.nav>
      </div>
      
      <div className="p-4 border-t border-sidebar-border">
        {!collapsed && (
          <motion.p 
            className="text-xs text-sidebar-foreground/60 font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            FlowState v1.0
          </motion.p>
        )}
      </div>

      <CreateWorkbenchModal 
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
        onCreateWorkbench={handleCreateWorkbench}
      />
    </motion.aside>
  );
};

export default Sidebar;
