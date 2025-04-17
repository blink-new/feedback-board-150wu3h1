
import { useState } from 'react';
import { Badge } from './ui/badge';
import { cn } from '../lib/utils';
import { Category } from '../types';

interface CategoryFilterProps {
  onFilterChange: (category: Category | 'all') => void;
  selectedCategory: Category | 'all';
}

export function CategoryFilter({ onFilterChange, selectedCategory }: CategoryFilterProps) {
  const categories: Array<{ label: string; value: Category | 'all' }> = [
    { label: 'All', value: 'all' },
    { label: 'Feature', value: 'feature' },
    { label: 'UI', value: 'ui' },
    { label: 'UX', value: 'ux' },
    { label: 'Enhancement', value: 'enhancement' },
    { label: 'Bug', value: 'bug' },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="font-medium mb-4">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category.value}
            variant="outline"
            className={cn(
              "cursor-pointer hover:bg-indigo-100 transition-colors px-3 py-1",
              selectedCategory === category.value
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-indigo-50 text-indigo-800"
            )}
            onClick={() => onFilterChange(category.value)}
          >
            {category.label}
          </Badge>
        ))}
      </div>
    </div>
  );
}