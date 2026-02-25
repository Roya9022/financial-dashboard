import Card from '../../shared/card';

const StatCardSkeleton = () => (
  <Card className="animate-pulse h-38.25">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-light-grey" />
      <div className="space-y-2">
        <div className="h-3 w-12 bg-light-grey rounded" />
        <div className="h-2 w-20 bg-light-grey rounded" />
      </div>
    </div>
    <div className="space-y-3">
      <div className="h-6 w-3/4 bg-light-grey rounded" />
      <div className="h-3 w-1/2 bg-light-grey rounded" />
    </div>
  </Card>
);
export default StatCardSkeleton;
