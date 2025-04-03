
import React from 'react';
import { Workbench, Snippet } from '@/types';
import { cn } from '@/lib/utils';
import SnippetCard from './SnippetCard';
import { motion } from 'framer-motion';

type WorkbenchDetailProps = {
  workbench: Workbench;
  snippets: Snippet[];
  className?: string;
};

const WorkbenchDetail: React.FC<WorkbenchDetailProps> = ({ 
  workbench, 
  snippets,
  className 
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className={cn("flex flex-col gap-6", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="flex flex-col gap-2">
        <motion.h1 
          className="text-2xl font-heading font-bold tracking-tight"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          {workbench.name}
        </motion.h1>
        {workbench.description && (
          <motion.p 
            className="text-muted-foreground font-sans"
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
          >
            {workbench.description}
          </motion.p>
        )}
        <motion.div 
          className="text-sm text-muted-foreground font-sans"
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        >
          Created on {new Date(workbench.createdAt).toLocaleDateString()}
        </motion.div>
      </div>

      <motion.div 
        className="flex flex-col gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h2 
          className="text-lg font-medium font-heading"
          variants={item}
        >
          Snippets ({snippets.length})
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {snippets.length > 0 ? (
            snippets.map((snippet, index) => (
              <motion.div 
                key={snippet.id} 
                variants={item}
                custom={index}
              >
                <SnippetCard snippet={snippet} />
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="text-muted-foreground text-center py-12 border border-dashed border-muted rounded-lg"
              variants={item}
            >
              No snippets found in this workbench.
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WorkbenchDetail;
