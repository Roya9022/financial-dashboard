import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTopStocks } from '@/services/trendingStocks';
import { StatCard } from '@/components';
import { StatCardSkeleton } from '@/components';

const PortfolioTrendingStocks: React.FC = () => {
  const {
    data: stocks,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['topStocks'],
    queryFn: fetchTopStocks,
    refetchInterval: 30000,
  });

  if (isLoading) {
    return (
      <div className="flex gap-6 overflow-hidden">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex-none w-60">
            <StatCardSkeleton />
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-4 bg-danger/10 text-danger rounded-xl border border-danger/20">
        Failed to load stock data. Please try again later.
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-px scrollbar-thin-subtle">
        {stocks?.map((stock) => (
          <div key={stock.id} className="flex-none w-60 snap-start">
            <StatCard stock={stock} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioTrendingStocks;
