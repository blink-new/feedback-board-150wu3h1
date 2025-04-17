
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from './ui/select';
import { Label } from './ui/label';
import { Feedback, Category } from '../types';

interface FeedbackFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (feedback: Feedback) => void;
}

export function FeedbackForm({ isOpen, onClose, onSubmit }: FeedbackFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<Category>('feature');
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    category: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
    const newErrors = {
      title: title.trim() ? '' : 'Title is required',
      description: description.trim() ? '' : 'Description is required',
      category: category ? '' : 'Category is required'
    };
    
    setErrors(newErrors);
    
    if (Object.values(newErrors).some(error => error)) {
      return;
    }
    
    // Create new feedback
    const newFeedback: Feedback = {
      id: nanoid(),
      title: title.trim(),
      description: description.trim(),
      category,
      status: 'new',
      votes: 0,
      createdAt: new Date().toISOString(),
      userName: 'You' // This would be replaced with actual user data
    };
    
    onSubmit(newFeedback);
    resetForm();
    onClose();
  };
  
  const resetForm = () => {
    setTitle('');
    setDescription('');
    setCategory('feature');
    setErrors({
      title: '',
      description: '',
      category: ''
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Add New Feedback</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Brief, descriptive title"
              className={errors.title ? "border-red-500" : ""}
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Detailed explanation of your feedback"
              className={errors.description ? "border-red-500" : ""}
              rows={4}
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select 
              value={category} 
              onValueChange={(value) => setCategory(value as Category)}
            >
              <SelectTrigger id="category" className={errors.category ? "border-red-500" : ""}>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="feature">Feature</SelectItem>
                <SelectItem value="ui">UI</SelectItem>
                <SelectItem value="ux">UX</SelectItem>
                <SelectItem value="enhancement">Enhancement</SelectItem>
                <SelectItem value="bug">Bug</SelectItem>
              </SelectContent>
            </Select>
            {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
              Submit Feedback
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}