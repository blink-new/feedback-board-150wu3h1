
import { useState } from 'react';
import { FeedbackCard } from './FeedbackCard';
import { SortOptions } from './SortOptions';
import { Feedback, SortOption, Category } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface FeedbackListProps {
  feedbackItems: Feedback[];
  onVote: (id: string) => void;
  selectedCategory: Category | 'all';
}

export function FeedbackList({ feedbackItems, onVote, selectedCategory }: FeedbackListProps) {
  const [sortOption, setSortOption] = useState<SortOption>('most-votes');

  const filteredItems = feedbackItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortOption) {
      case 'most-votes':
        return b.votes - a.votes;
      case 'least-votes':
        return a.votes - b.votes;
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'oldest':
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg p-4 shadow-sm flex justify-between items-center">
        <SortOptions onSortChange={setSortOption} currentSort={sortOption} />
        <div className="text-sm text-gray-500">
          {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
        </div>
      </div>

      {sortedItems.length === 0 ? (
        <div className="bg-white rounded-lg p-8 shadow-sm text-center">
          <h3 className="text-xl font-medium mb-2">No feedback found</h3>
          <p className="text-gray-500">
            {selectedCategory === 'all' 
              ? "There's no feedback yet. Be the first to add one!"
              : `There's no ${selectedCategory} feedback yet. Change the filter or add one!`}
          </p>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {sortedItems.map((item) => (
              <FeedbackCard 
                key={item.id} 
                feedback={item} 
                onVote={onVote} 
              />
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}