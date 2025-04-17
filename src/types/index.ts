
export interface Feedback {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'planned' | 'in-progress' | 'completed' | 'new';
  votes: number;
  createdAt: string;
  userId?: string;
  userName?: string;
}

export type Category = 'feature' | 'ui' | 'ux' | 'enhancement' | 'bug';

export type SortOption = 'most-votes' | 'least-votes' | 'newest' | 'oldest';