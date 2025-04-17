
import { nanoid } from 'nanoid';
import { Feedback } from '../types';

export const mockFeedback: Feedback[] = [
  {
    id: nanoid(),
    title: 'Add dark mode option',
    description: 'It would be great to have a dark theme to reduce eye strain during night time.',
    category: 'feature',
    status: 'planned',
    votes: 99,
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    userName: 'Sarah Johnson'
  },
  {
    id: nanoid(),
    title: 'Ability to follow feedback threads',
    description: 'I want to receive notifications when there are updates to feedback I care about.',
    category: 'feature',
    status: 'new',
    votes: 65,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    userName: 'Michael Chen'
  },
  {
    id: nanoid(),
    title: 'Preview images in feedback',
    description: 'Allow users to attach screenshots or images to better explain their feedback.',
    category: 'enhancement',
    status: 'in-progress',
    votes: 42,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    userName: 'Alex Rivera'
  },
  {
    id: nanoid(),
    title: 'Improve mobile responsiveness',
    description: 'The dashboard is hard to use on mobile devices. Please make it more responsive.',
    category: 'ui',
    status: 'new',
    votes: 38,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    userName: 'Jamie Taylor'
  },
  {
    id: nanoid(),
    title: 'Fix login page bug',
    description: 'Sometimes the login page freezes when entering credentials.',
    category: 'bug',
    status: 'completed',
    votes: 29,
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    userName: 'Pat Smith'
  },
  {
    id: nanoid(),
    title: 'Add keyboard shortcuts',
    description: 'Power users would benefit from keyboard shortcuts for common actions.',
    category: 'enhancement',
    status: 'planned',
    votes: 28,
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    userName: 'Robin Williams'
  },
  {
    id: nanoid(),
    title: 'Improve search functionality',
    description: 'The current search is too basic. Add filters and advanced search options.',
    category: 'enhancement',
    status: 'new',
    votes: 25,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    userName: 'Jordan Lee'
  }
];