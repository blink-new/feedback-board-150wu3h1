
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Feedback } from '../types';
import { motion } from 'framer-motion';

interface StatusBoardProps {
  feedbackItems: Feedback[];
}

export function StatusBoard({ feedbackItems }: StatusBoardProps) {
  const planned = feedbackItems.filter(item => item.status === 'planned');
  const inProgress = feedbackItems.filter(item => item.status === 'in-progress');
  const completed = feedbackItems.filter(item => item.status === 'completed');

  const statusCards = [
    {
      title: 'Planned',
      count: planned.length,
      color: 'from-orange-500 to-amber-500',
      items: planned.slice(0, 3)
    },
    {
      title: 'In Progress',
      count: inProgress.length,
      color: 'from-blue-500 to-indigo-500',
      items: inProgress.slice(0, 3)
    },
    {
      title: 'Completed',
      count: completed.length,
      color: 'from-green-500 to-emerald-500',
      items: completed.slice(0, 3)
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="font-medium mb-4">Roadmap</h3>
      <div className="space-y-4">
        {statusCards.map((status, index) => (
          <div key={status.title} className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${status.color}`} />
            <div className="flex justify-between items-center w-full">
              <span className="text-gray-700">{status.title}</span>
              <span className="text-gray-500 text-sm">{status.count}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
          View Full Roadmap
        </a>
      </div>
    </div>
  );
}