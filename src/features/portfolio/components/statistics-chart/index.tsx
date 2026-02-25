import { Card } from '@/shared';
import { useQuery } from '@tanstack/react-query';
import { fetchWeeklyStats } from '@/services/statsService';
import { useChartColors } from '@/hooks/useChartColors';
import { useState, useMemo } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const useChartThemeColors = () => {
  return useMemo(() => {
    if (typeof window === 'undefined') return null;
    const styles = getComputedStyle(document.documentElement);
    return {
      start: styles.getPropertyValue('--color-chart-start').trim(),
      mid: styles.getPropertyValue('--color-chart-mid').trim(),
      end: styles.getPropertyValue('--color-chart-end').trim(),
    };
  }, []);
};

const PortfolioStatsChart = () => {
  const colors = useChartColors();
  const chartTheme = useChartThemeColors();
  const [timeframe, setTimeframe] = useState<'Month' | 'Week'>('Month');

  const { data, isLoading } = useQuery({
    queryKey: ['weeklyStats', timeframe],
    queryFn: () => fetchWeeklyStats(timeframe),
  });

  if (isLoading || !chartTheme) {
    return (
      <div className="h-full w-full bg-bg-secondary animate-pulse rounded-3xl min-h-75" />
    );
  }

  return (
    <Card className="h-full bg-bg-secondary flex flex-col p-5 min-h-80 lg:min-h-0">
      <div className="flex justify-between items-center mb-4 shrink-0">
        <h3 className="font-bold text-lg text-text-primary">Statistics</h3>
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value as 'Month' | 'Week')}
          className="text-xs border border-border-default/70 rounded-lg px-2 py-1 bg-bg-secondary text-text-secondary cursor-pointer outline-none"
        >
          <option value="Month">Month</option>
          <option value="Week">Week</option>
        </select>
      </div>
      <div className="flex-1 w-full min-h-55 lg:min-h-0 relative">
        <ResponsiveContainer width="100%" height="100%" debounce={100}>
          <AreaChart
            data={data}
            margin={{ top: 5, right: 5, left: -25, bottom: 0 }}
          >
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={chartTheme.start} />
                <stop offset="50%" stopColor={chartTheme.mid} />
                <stop offset="100%" stopColor={chartTheme.end} />
              </linearGradient>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor={chartTheme.start}
                  stopOpacity={0.2}
                />
                <stop
                  offset="100%"
                  stopColor={chartTheme.end}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke={colors.border}
              opacity={0.2}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: colors.textSecondary, fontSize: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: colors.textSecondary, fontSize: 10 }}
              tickFormatter={(v) => `${v / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                borderRadius: '12px',
                border: 'none',
                fontSize: '10px',
              }}
              itemStyle={{ color: '#fff' }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="url(#chartGradient)"
              strokeWidth={2}
              fill="url(#areaGradient)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default PortfolioStatsChart;
