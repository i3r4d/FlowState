
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type CreateWorkbenchModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateWorkbench: (name: string) => void;
};

const CreateWorkbenchModal: React.FC<CreateWorkbenchModalProps> = ({
  open,
  onOpenChange,
  onCreateWorkbench
}) => {
  const [workbenchName, setWorkbenchName] = useState('');

  const handleCreate = () => {
    if (workbenchName.trim()) {
      onCreateWorkbench(workbenchName);
      setWorkbenchName('');
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Workbench</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name"
                value={workbenchName}
                onChange={(e) => setWorkbenchName(e.target.value)}
                placeholder="Enter workbench name"
                className="w-full"
                autoFocus
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleCreate} disabled={!workbenchName.trim()}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateWorkbenchModal;
