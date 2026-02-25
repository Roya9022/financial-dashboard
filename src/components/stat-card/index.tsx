import { Card, IconBox, TrendBadge } from '@/shared';
import type { StockStat } from '@/services/trendingStocks';

const StatCard = ({ stock }: { stock: StockStat }) => {
  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(val);

  return (
    <Card className="flex-1 min-w-30 bg-bg-secondary border-border-default hover:border-brand/20 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <IconBox
          src={stock.logoUrl}
          fallbackText={stock.symbol}
          size="md"
          className="bg-bg-toggle border border-border-default"
        />
        <div className="overflow-hidden">
          <h4 className="font-bold text-sm leading-tight text-text-primary">
            {stock.symbol}
          </h4>
          <p className="text-[10px] text-text-secondary truncate">
            {stock.name}
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-text-primary">
          {formatCurrency(stock.price)}
        </h2>
        <div className="flex items-center gap-2">
          <TrendBadge value={stock.changePercent} isPositive={stock.isUp} />
          <p className="text-[10px] text-text-secondary whitespace-nowrap">
            vs last month
          </p>
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
