
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import WorkbenchDetailComponent from '@/components/workbench/WorkbenchDetail';
import { Workbench, Snippet } from '@/types';

const WorkbenchDetailPage = () => {
  // Sample placeholder workbench data
  const workbench: Workbench = {
    id: "wb1",
    name: "Marketing Campaign Analysis",
    description: "Q2 performance metrics and insights",
    createdAt: "2025-03-12T10:30:00Z",
    snippetCount: 12
  };

  // Sample placeholder snippets data
  const snippets: Snippet[] = [
    {
      id: "snip1",
      workbenchId: "wb1",
      type: "text",
      content: "Our Q2 campaign showed a 24% increase in engagement compared to Q1. Key drivers were the improved social media strategy and targeted email campaigns.",
      sourceUrl: "https://analytics.example.com/reports/q2-2025",
      capturedAt: "2025-03-15T14:30:00Z"
    },
    {
      id: "snip2",
      workbenchId: "wb1",
      type: "image",
      content: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      sourceUrl: "https://dashboard.example.com/metrics/conversion",
      capturedAt: "2025-03-14T09:45:00Z"
    },
    {
      id: "snip3",
      workbenchId: "wb1",
      type: "link",
      content: "https://example.com/blog/marketing-trends-2025",
      sourceUrl: "https://example.com/blog/marketing-trends-2025",
      capturedAt: "2025-03-13T11:20:00Z"
    }
  ];

  return (
    <DashboardLayout>
      <WorkbenchDetailComponent 
        workbench={workbench}
        snippets={snippets}
        className="h-full"
      />
    </DashboardLayout>
  );
};

export default WorkbenchDetailPage;
