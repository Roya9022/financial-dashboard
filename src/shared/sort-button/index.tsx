import { ChevronUp, ChevronDown } from 'lucide-react';

interface SortButtonProps {
  state: 'asc' | 'desc' | null;
}

const SortButton = ({ state }: SortButtonProps) => {
  return (
    <div className="flex flex-col -space-y-1">
      <ChevronUp
        size={12}
        className={`transition-colors ${
          state === 'asc'
            ? 'text-brand opacity-100'
            : 'text-text-secondary opacity-30'
        }`}
      />
      <ChevronDown
        size={12}
        className={`transition-colors ${
          state === 'desc'
            ? 'text-brand opacity-100'
            : 'text-text-secondary opacity-30'
        }`}
      />
    </div>
  );
};

export default SortButton;
