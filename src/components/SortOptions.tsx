
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { SortOption } from '../types';

interface SortOptionsProps {
  onSortChange: (option: SortOption) => void;
  currentSort: SortOption;
}

export function SortOptions({ onSortChange, currentSort }: SortOptionsProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500">Sort by:</span>
      <Select
        value={currentSort}
        onValueChange={(value) => onSortChange(value as SortOption)}
      >
        <SelectTrigger className="w-[180px] bg-white border-gray-200">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="most-votes">Most Votes</SelectItem>
          <SelectItem value="least-votes">Least Votes</SelectItem>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="oldest">Oldest</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}