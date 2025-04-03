
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
import { motion } from 'framer-motion';

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
      <DialogContent className="sm:max-w-md overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <DialogHeader>
            <DialogTitle className="text-xl font-heading">Create New Workbench</DialogTitle>
          </DialogHeader>
          <div className="py-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-sm">Name</Label>
                <Input 
                  id="name"
                  value={workbenchName}
                  onChange={(e) => setWorkbenchName(e.target.value)}
                  placeholder="Enter workbench name"
                  className="w-full input-focus transition-shadow duration-300"
                  autoFocus
                />
              </div>
            </div>
          </div>
          <DialogFooter className="gap-2">
            <DialogClose asChild>
              <Button variant="outline" className="transition-all duration-200">Cancel</Button>
            </DialogClose>
            <Button 
              onClick={handleCreate} 
              disabled={!workbenchName.trim()}
              className="transition-all duration-300 hover:shadow-md"
            >
              Create
            </Button>
          </DialogFooter>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateWorkbenchModal;
