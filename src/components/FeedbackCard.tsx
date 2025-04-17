
import { ArrowUp, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Feedback } from '../types';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

interface FeedbackCardProps {
  feedback: Feedback;
  onVote: (id: string) => void;
}

export function FeedbackCard({ feedback, onVote }: FeedbackCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'feature':
        return 'bg-blue-100 text-blue-800';
      case 'ui':
        return 'bg-purple-100 text-purple-800';
      case 'ux':
        return 'bg-pink-100 text-pink-800';
      case 'enhancement':
        return 'bg-green-100 text-green-800';
      case 'bug':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planned':
        return 'bg-orange-100 text-orange-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div>
              <Button
                variant="outline"
                size="sm"
                className="flex flex-col items-center p-2 h-auto rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                onClick={() => onVote(feedback.id)}
              >
                <ArrowUp className="h-4 w-4" />
                <span className="text-sm font-medium">{feedback.votes}</span>
              </Button>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg mb-1">{feedback.title}</h3>
              <p className="text-gray-600 mb-3 line-clamp-2">{feedback.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge className={cn("font-normal", getCategoryColor(feedback.category))}>
                  {feedback.category}
                </Badge>
                {feedback.status !== 'new' && (
                  <Badge className={cn("font-normal", getStatusColor(feedback.status))}>
                    {feedback.status}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 px-6 py-3 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            {feedback.userName} • {formatDate(feedback.createdAt)}
          </div>
          <div className="flex items-center text-gray-500">
            <MessageCircle className="h-4 w-4 mr-1" />
            <span className="text-sm">0</span>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}