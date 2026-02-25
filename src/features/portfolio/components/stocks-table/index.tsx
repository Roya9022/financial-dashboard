import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { IconBox, DataTable, TrendBadge } from '@/shared';
import { fetchUserStocks } from '@/services/stockService';
import type { UserStock } from '@/services/stockService';
import type { Column } from '@/shared/data-table';

const PAGE_SIZE = 5;

const ProfileStocksTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ['userStocks', currentPage, PAGE_SIZE],
    queryFn: () => fetchUserStocks({ page: currentPage, pageSize: PAGE_SIZE }),
  });

  const columns: Column<UserStock>[] = [
    {
      header: 'Name Stock',
      accessor: 'symbol',
      sortable: true,
      render: (stock: UserStock) => (
        <div className="flex items-center gap-3">
          <IconBox
            src={stock.logoUrl}
            fallbackText={stock.symbol}
            size="md"
            className="rounded-full bg-black text-white shrink-0"
          />
          <div className="whitespace-nowrap">
            <div className="font-bold text-sm text-text-primary">
              {stock.symbol}
            </div>
            <div className="text-xs text-text-secondary">{stock.name}</div>
          </div>
        </div>
      ),
    },
    {
      header: 'Invest Date',
      accessor: 'investDate',
      sortable: true,
      className: 'text-xs text-text-primary font-semibold',
      render: (stock: UserStock) =>
        new Date(stock.investDate).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
    },
    {
      header: 'Volume',
      accessor: 'volume',
      sortable: true,
      className: 'text-xs text-text-primary font-semibold',
    },
    {
      header: 'Change',
      accessor: 'change',
      sortable: true,
      render: (stock: UserStock) => (
        <TrendBadge value={stock.change} isPositive={stock.isUp} />
      ),
    },
    {
      header: 'Price/stock',
      accessor: 'price',
      sortable: true,
      render: (stock: UserStock) => (
        <span className="text-xs text-text-primary font-semibold">
          ${stock.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </span>
      ),
    },
    {
      header: 'Number of lots',
      accessor: 'lots',
      sortable: true,
      className: 'text-xs text-brand-light font-bold',
      render: (stock: UserStock) => stock.lots.toLocaleString(),
    },
  ];

  return (
    <div className="h-full flex flex-col min-h-0">
      <DataTable
        title="My Stock"
        data={data?.items ?? []}
        columns={columns}
        isLoading={isLoading}
        skeletonClassName="h-[529px] lg:h-[396px] mt-4"
        pageSize={PAGE_SIZE}
        total={data?.total ?? 0}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProfileStocksTable;
