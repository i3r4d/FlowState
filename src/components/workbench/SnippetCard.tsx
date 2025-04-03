
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Snippet } from '@/types';
import { CalendarIcon, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type SnippetCardProps = {
  snippet: Snippet;
  className?: string;
};

const SnippetCard: React.FC<SnippetCardProps> = ({ snippet, className }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const renderSnippetContent = () => {
    switch (snippet.type) {
      case 'text':
        return (
          <div className="prose prose-sm max-w-full">
            <p className="font-sans text-foreground/90 leading-relaxed">{snippet.content}</p>
          </div>
        );
      case 'image':
        return (
          <div className="overflow-hidden rounded-md transition-all duration-300 group-hover:shadow-md">
            <img 
              src={snippet.content} 
              alt="Snippet" 
              className="w-full h-auto max-h-96 object-cover rounded-md transition-transform duration-500 group-hover:scale-[1.02]" 
            />
          </div>
        );
      case 'link':
        return (
          <div className="flex flex-col gap-2">
            <a 
              href={snippet.content} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 hover:underline transition-colors flex items-center gap-2 font-medium"
            >
              {snippet.content}
              <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        );
      default:
        return <p>Unknown snippet type</p>;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "tween", duration: 0.2 }}
    >
      <Card className={cn(
        "overflow-hidden group transition-all duration-200 hover:shadow-lg hover:border-primary/20", 
        className
      )}>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              {renderSnippetContent()}
            </div>
            
            <div className="flex justify-between items-center text-sm text-muted-foreground border-t pt-3">
              <a 
                href={snippet.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-foreground transition-colors flex items-center gap-1 group"
              >
                <span>{new URL(snippet.sourceUrl).hostname}</span>
                <ExternalLink className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
              
              <div className="flex items-center gap-1">
                <CalendarIcon className="h-3.5 w-3.5" />
                <span>{formatDate(snippet.capturedAt)}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SnippetCard;
