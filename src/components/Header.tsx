
import { useState } from 'react';
import { Button } from './ui/button';
import { PlusCircle, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { cn } from '../lib/utils';

interface HeaderProps {
  onAddFeedback: () => void;
  feedbackCount: number;
}

export function Header({ onAddFeedback, feedbackCount }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Feedback Board</h1>
            <p className="text-indigo-100">{feedbackCount} suggestions</p>
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-indigo-700">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gradient-to-b from-indigo-600 to-purple-600 text-white border-none">
                <div className="flex flex-col gap-4 mt-8">
                  <Button 
                    onClick={onAddFeedback}
                    className="bg-white text-indigo-700 hover:bg-indigo-100"
                  >
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Feedback
                  </Button>
                  <div className="mt-4">
                    <h3 className="font-medium mb-2">About</h3>
                    <p className="text-sm text-indigo-100">
                      This feedback board helps collect and prioritize ideas from users.
                      Vote on suggestions you like or add your own!
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          {/* Desktop */}
          <div className="hidden md:block">
            <Button 
              onClick={onAddFeedback}
              className="bg-white text-indigo-700 hover:bg-indigo-100"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Feedback
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}