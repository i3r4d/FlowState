
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Placeholder from '@/components/layout/Placeholder';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="h-full flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to your FlowState dashboard.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Placeholder 
              title="Recent Projects" 
              description="Your recent projects will appear here." 
            />
          </div>
          <div className="flex flex-col gap-6">
            <Placeholder 
              title="Activity" 
              description="Your recent activity will appear here." 
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
