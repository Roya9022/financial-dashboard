import { Card } from '@/shared';

const PortfolioValuesSkeleton = () => {
  return (
    <Card className="flex flex-col p-5 h-full justify-between animate-pulse">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="h-6 w-32 bg-bg-toggle rounded-md" />
          <div className="h-5 w-5 bg-bg-toggle rounded-full" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-3">
              <div className="h-10 w-40 bg-bg-toggle rounded-lg" />
              <div className="h-6 w-16 bg-bg-toggle rounded-full opacity-60" />
            </div>
            <div className=" bg-bg-toggle opacity-60 w-30 h-10 text-[12px] rounded-2xl" />
          </div>
          <div className="h-3 w-48 bg-bg-toggle rounded opacity-50" />
        </div>
        <div className="flex gap-3">
          <div className="flex-1 h-10 bg-bg-toggle rounded-xl" />
          <div className="flex-1 h-10 bg-bg-toggle rounded-xl" />
        </div>
      </div>
      <div className="p-2.5 mt-2 rounded-2xl bg-bg-toggle/50 border border-border-default flex items-center justify-between">
        <div className="flex items-center gap-2.5 flex-1">
          <div className="w-7 h-7 rounded-full bg-bg-toggle shrink-0" />
          <div className="space-y-1.5 flex-1">
            <div className="h-2 w-full bg-bg-toggle rounded" />
            <div className="h-2 w-2/3 bg-bg-toggle rounded" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PortfolioValuesSkeleton;
