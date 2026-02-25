import { Card } from '@/shared';

interface TableSkeletonProps {
  className?: string;
  rowCount?: number;
}

const TableSkeleton = ({
  className = 'h-99',
  rowCount = 5,
}: TableSkeletonProps) => {
  return (
    <Card
      className={`bg-bg-secondary border-none shadow-sm flex flex-col overflow-hidden animate-pulse ${className}`}
    >
      <div className="flex justify-between items-center mb-8 px-1 shrink-0">
        <div className="h-6 w-32 bg-bg-toggle rounded-md" />
        <div className="h-8 w-8 bg-bg-toggle rounded-full" />
      </div>
      <div className="flex-1 space-y-6">
        <div className="flex border-b border-border-default pb-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-3 flex-1 bg-bg-toggle rounded opacity-50"
            />
          ))}
        </div>

        {Array.from({ length: rowCount }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 py-2">
            <div className="w-10 h-10 bg-bg-toggle rounded-full shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-3 w-full bg-bg-toggle rounded" />
              <div className="h-2 w-2/3 bg-bg-toggle rounded opacity-50" />
            </div>
            <div className="h-3 w-16 bg-bg-toggle rounded" />
            <div className="h-3 w-16 bg-bg-toggle rounded" />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TableSkeleton;
