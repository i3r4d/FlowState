
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { Workbench } from '@/types';
import { motion } from "framer-motion";

type WorkbenchListProps = {
  className?: string;
};

const WorkbenchList: React.FC<WorkbenchListProps> = ({ className }) => {
  const navigate = useNavigate();
  
  // Sample placeholder data
  const workbenches: Workbench[] = [
    {
      id: "wb1",
      name: "Marketing Campaign Analysis",
      description: "Q2 performance metrics and insights",
      createdAt: "2025-03-12T10:30:00Z",
      snippetCount: 12
    },
    {
      id: "wb2",
      name: "Product Roadmap",
      description: "Feature prioritization and timeline",
      createdAt: "2025-03-10T08:15:00Z",
      snippetCount: 8
    },
    {
      id: "wb3",
      name: "UX Research Notes",
      description: "User interview findings and patterns",
      createdAt: "2025-03-05T14:45:00Z",
      snippetCount: 24
    },
    {
      id: "wb4",
      name: "Quarterly OKRs",
      description: "Team objectives and key results",
      createdAt: "2025-02-28T16:20:00Z",
      snippetCount: 6
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  const handleWorkbenchClick = (workbenchId: string) => {
    navigate(`/workbench/${workbenchId}`);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {workbenches.map((workbench, index) => (
        <motion.div
          key={workbench.id}
          variants={item}
          custom={index}
        >
          <button
            className="w-full text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-lg"
            onClick={() => handleWorkbenchClick(workbench.id)}
          >
            <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-primary/40 group-hover:border-primary/40 group-focus-visible:border-primary/40">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-heading">{workbench.name}</CardTitle>
                <CardDescription className="line-clamp-1 font-sans">{workbench.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm text-muted-foreground pt-2">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-3.5 w-3.5" />
                    <span className="font-sans">{formatDate(workbench.createdAt)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span className="font-sans">{workbench.snippetCount} snippets</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default WorkbenchList;
