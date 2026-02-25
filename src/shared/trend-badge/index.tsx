import { ArrowUp, ArrowDown } from 'lucide-react';

interface TrendBadgeProps {
  value: number;
  isPositive?: boolean;
  showPlusMinus?: boolean;
  className?: string;
}

const TrendBadge = ({
  value,
  isPositive: manualIsPositive,
  showPlusMinus = false,
  className = '',
}: TrendBadgeProps) => {
  const isUp = manualIsPositive !== undefined ? manualIsPositive : value >= 0;
  const absoluteValue = Math.abs(value).toFixed(2);

  return (
    <div
      className={`inline-flex items-center gap-1 px-1.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold shrink-0 ${
        isUp ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'
      } ${className}`}
    >
      {isUp ? (
        <ArrowUp size={10} strokeWidth={3} />
      ) : (
        <ArrowDown size={10} strokeWidth={3} />
      )}
      <span>
        {showPlusMinus && (isUp ? '+' : '-')}
        {absoluteValue}%
      </span>
    </div>
  );
};

export default TrendBadge;
