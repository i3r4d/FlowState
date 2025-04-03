
import React from 'react';
import { Workbench, Snippet } from '@/types';
import { cn } from '@/lib/utils';
import SnippetCard from './SnippetCard';

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
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">{workbench.name}</h1>
        {workbench.description && (
          <p className="text-muted-foreground">{workbench.description}</p>
        )}
        <div className="text-sm text-muted-foreground">
          Created on {new Date(workbench.createdAt).toLocaleDateString()}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-medium">Snippets ({snippets.length})</h2>
        <div className="grid grid-cols-1 gap-4">
          {snippets.length > 0 ? (
            snippets.map((snippet) => (
              <SnippetCard key={snippet.id} snippet={snippet} />
            ))
          ) : (
            <div className="text-muted-foreground text-center py-8">
              No snippets found in this workbench.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkbenchDetail;
