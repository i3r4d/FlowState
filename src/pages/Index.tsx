
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import WorkbenchList from '@/components/workbench/WorkbenchList';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="h-full flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold tracking-tight">All Workbenches</h1>
          <p className="text-muted-foreground">Manage and organize your FlowState workbenches.</p>
        </div>

        <WorkbenchList className="flex-1" />
      </div>
    </DashboardLayout>
  );
};

export default Index;
