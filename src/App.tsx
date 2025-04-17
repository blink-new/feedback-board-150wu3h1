
import { useState } from 'react';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { FeedbackList } from './components/FeedbackList';
import { FeedbackForm } from './components/FeedbackForm';
import { StatusBoard } from './components/StatusBoard';
import { mockFeedback } from './data/mockData';
import { Feedback, Category } from './types';
import { Toaster } from './components/ui/toaster';
import { useToast } from './hooks/use-toast';

function App() {
  const [feedbackItems, setFeedbackItems] = useState<Feedback[]>(mockFeedback);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { toast } = useToast();

  const handleAddFeedback = (feedback: Feedback) => {
    setFeedbackItems([feedback, ...feedbackItems]);
    toast({
      title: "Feedback submitted!",
      description: "Your feedback has been added successfully.",
    });
  };

  const handleVote = (id: string) => {
    setFeedbackItems(
      feedbackItems.map(item => 
        item.id === id 
          ? { ...item, votes: item.votes + 1 } 
          : item
      )
    );
  };

  const handleCategoryChange = (category: Category | 'all') => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        onAddFeedback={() => setIsFormOpen(true)} 
        feedbackCount={feedbackItems.length}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1 space-y-6">
            <CategoryFilter 
              onFilterChange={handleCategoryChange}
              selectedCategory={selectedCategory}
            />
            <StatusBoard feedbackItems={feedbackItems} />
          </div>
          
          <div className="md:col-span-3">
            <FeedbackList 
              feedbackItems={feedbackItems}
              onVote={handleVote}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </main>
      
      <FeedbackForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleAddFeedback}
      />
      
      <Toaster />
    </div>
  );
}

export default App;