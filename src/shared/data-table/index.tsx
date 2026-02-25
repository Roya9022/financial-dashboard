import React, { useEffect, useMemo, useState } from 'react';
import { MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, SortButton, TableSkeleton } from '@/shared';

export interface Column<T> {
  header: string;
  accessor: keyof T;
  sortable?: boolean;
  render?: (item: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  title: string;
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
  isLoading?: boolean;
  maxHeight?: string;
  skeletonClassName?: string;
  pageSize?: number;
  total: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function DataTable<T extends { id: string | number }>({
  title,
  data,
  columns,
  onRowClick,
  isLoading,
  maxHeight,
  skeletonClassName,
  pageSize = 5,
  total,
  currentPage,
  onPageChange,
}: DataTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: 'asc' | 'desc' | null;
  }>({ key: null, direction: null });

  const totalPages = Math.ceil(total / pageSize);

  const handleSort = (key: keyof T) => {
    onPageChange(1);
    setSortConfig((prev) => {
      if (prev.key !== key) return { key, direction: 'asc' };
      if (prev.direction === 'asc') return { key, direction: 'desc' };
      if (prev.direction === 'desc') return { key, direction: null };
      return { key, direction: 'asc' };
    });
  };

  useEffect(() => {
    if (currentPage > totalPages) {
      onPageChange(1);
    }
  }, [total, totalPages, currentPage, onPageChange]);

  const sortedData = useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction) return data;

    return [...data].sort((a, b) => {
      type SortableValue = string | number | boolean;

      let aVal = a[sortConfig.key!] as SortableValue;
      let bVal = b[sortConfig.key!] as SortableValue;

      if (
        sortConfig.key === 'investDate' &&
        typeof aVal === 'string' &&
        typeof bVal === 'string'
      ) {
        aVal = new Date(aVal).getTime();
        bVal = new Date(bVal).getTime();
      }

      if (
        sortConfig.key === 'volume' &&
        typeof aVal === 'string' &&
        typeof bVal === 'string'
      ) {
        aVal = parseFloat(aVal);
        bVal = parseFloat(bVal);
      }

      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const fillerRows = pageSize - sortedData.length;

  if (isLoading) return <TableSkeleton className={skeletonClassName} />;

  return (
    <Card className="bg-bg-secondary border-none shadow-sm flex flex-col overflow-hidden">
      <div className="flex justify-between items-center mb-6 px-1 shrink-0">
        <h3 className="font-bold text-lg text-text-primary">{title}</h3>
        <button className="p-2 hover:bg-bg-primary rounded-full transition-colors cursor-pointer outline-none text-text-secondary">
          <MoreVertical size={20} />
        </button>
      </div>

      <div
        className="scrollbar-thin-subtle flex-1 pr-1"
        style={{ maxHeight: maxHeight || 'none' }}
      >
        <table className="w-full text-left table-auto border-separate border-spacing-0">
          <thead className="sticky top-0 z-10 bg-bg-secondary">
            <tr className="text-text-primary text-[11px] tracking-wider">
              {columns.map((col) => (
                <th
                  key={String(col.accessor)}
                  className={`pb-4 font-semibold select-none outline-none border-b border-border-default ${
                    col.sortable ? 'cursor-pointer group' : ''
                  }`}
                  onClick={() => col.sortable && handleSort(col.accessor)}
                >
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    {col.header}
                    {col.sortable && (
                      <SortButton
                        state={
                          sortConfig.key === col.accessor
                            ? sortConfig.direction
                            : null
                        }
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border-default/30">
            {sortedData.map((item) => (
              <tr
                key={item.id}
                onClick={() => onRowClick?.(item)}
                className={`group hover:bg-bg-primary/40 transition-colors duration-200 ${
                  onRowClick ? 'cursor-pointer' : ''
                }`}
              >
                {columns.map((col) => (
                  <td
                    key={String(col.accessor)}
                    className={`py-5 ${col.className || ''}`}
                  >
                    {col.render
                      ? col.render(item)
                      : (item[col.accessor] as React.ReactNode)}
                  </td>
                ))}
              </tr>
            ))}

            {Array.from({ length: fillerRows }).map((_, i) => (
              <tr
                key={`filler-${i}`}
                className="hidden md:table-row pointer-events-none select-none"
              >
                {columns.map((col) => (
                  <td key={String(col.accessor)} className="py-5">
                    &nbsp;
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-4 mt-2 border-t border-border-default px-1 shrink-0">
          <span className="text-xs text-text-secondary">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-1.5 rounded-md cursor-pointer hover:bg-bg-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-text-secondary"
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`w-7 h-7 cursor-pointer text-xs rounded-md transition-colors font-medium ${
                  page === currentPage
                    ? 'bg-brand-light text-white'
                    : 'hover:bg-bg-primary text-text-secondary'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-1.5 cursor-pointer rounded-md hover:bg-bg-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-text-secondary"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </Card>
  );
}

export default DataTable;
