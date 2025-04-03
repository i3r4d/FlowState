
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Snippet } from '@/types';
import { CalendarIcon, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

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
            <p>{snippet.content}</p>
          </div>
        );
      case 'image':
        return (
          <div className="overflow-hidden">
            <img 
              src={snippet.content} 
              alt="Snippet" 
              className="w-full h-auto max-h-96 object-cover rounded-md" 
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
              className="text-primary hover:underline flex items-center gap-2"
            >
              {snippet.content}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        );
      default:
        return <p>Unknown snippet type</p>;
    }
  };

  return (
    <Card className={cn("overflow-hidden", className)}>
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
              className="hover:text-foreground transition-colors"
            >
              {new URL(snippet.sourceUrl).hostname}
            </a>
            
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-3.5 w-3.5" />
              <span>{formatDate(snippet.capturedAt)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SnippetCard;
