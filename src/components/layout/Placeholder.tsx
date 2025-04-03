
import React from 'react';
import { cn } from "@/lib/utils";

type PlaceholderProps = {
  title: string;
  description?: string;
  className?: string;
};

const Placeholder: React.FC<PlaceholderProps> = ({ 
  title, 
  description, 
  className 
}) => {
  return (
    <div className={cn(
      "h-full flex flex-col items-center justify-center p-6 rounded-lg border border-dashed border-border",
      className
    )}>
      <div className="text-center max-w-md">
        <h3 className="text-xl font-medium text-foreground mb-2">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Placeholder;
