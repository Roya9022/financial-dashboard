import { useState } from 'react';
import { Button, Card, TrendBadge } from '@/shared';
import { MoreVertical, ChevronRight, Sparkles } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchPortfolioSummary } from '@/services/portfolioService';
import PortfolioValuesSkeleton from './Skeleton';
import InvestButton from './invest-button';

const PortfolioValuesCard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['portfolioSummary'],
    queryFn: fetchPortfolioSummary,
  });

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(val);

  const [totalBalance, setTotalBalance] = useState(17580.0);
  const handleUpdateBalance = (amount: number) => {
    setTotalBalance((prev) => prev + amount);
  };

  if (isLoading) return <PortfolioValuesSkeleton />;

  return (
    <Card className="flex flex-col p-5 h-full justify-between">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-text-primary font-bold text-lg">
            Portfolio Values
          </h2>
          <button className="text-text-primary cursor-pointer outline-none">
            <MoreVertical size={18} />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <div className="flex items-baseline gap-3">
              <h1 className="text-3xl font-extrabold tracking-tight text-text-primary">
                {formatCurrency(totalBalance)}
              </h1> 
              <TrendBadge value={data?.growthPercentage ?? 0} />
            </div>
            <div className="text-[12px] text-text-secondary">
              <p>
                Your profits is{' '}
                <span className="text-text-primary font-semibold">
                  {formatCurrency(data?.monthlyProfit || 0)}
                </span>{' '}
                this month.
              </p>
            </div>
          </div>
          <InvestButton onInvest={handleUpdateBalance} />
        </div>

        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 h-10 text-[12px]">
            Worst Performance
          </Button>
          <Button variant="filled" className="flex-1 h-10 text-[12px]">
            Top Performance
          </Button>
        </div>
      </div>
      <div className="p-2.5 mt-2 rounded-2xl bg-brand-background border border-brand/5 flex items-center justify-between cursor-pointer group hover:bg-brand/10 transition-all">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-7 h-7 rounded-full bg-white dark:bg-bg-primary flex items-center justify-center shadow-sm shrink-0">
            <Sparkles size={14} className="text-brand" />
          </div>
          <p className="text-[11px] text-brand-dark dark:text-brand-light font-medium leading-tight">
            Here's to improve your portfolio and understanding how investing
            works.
          </p>
        </div>
        <ChevronRight
          size={14}
          className="text-brand group-hover:translate-x-1 transition-transform"
        />
      </div>
    </Card>
  );
};

export default PortfolioValuesCard;
