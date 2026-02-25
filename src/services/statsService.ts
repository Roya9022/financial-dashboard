export interface ChartDataPoint {
  day: string;
  value: number;
}

export const fetchWeeklyStats = (
  timeframe: string = 'Month',
): Promise<ChartDataPoint[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (timeframe === 'Week') {
        resolve([
          { day: 'Dec 1', value: 38000 },
          { day: 'Dec 2', value: 42000 },
          { day: 'Dec 3', value: 41000 },
          { day: 'Dec 4', value: 45000 },
          { day: 'Dec 5', value: 43000 },
          { day: 'Dec 6', value: 48000 },
          { day: 'Dec 7', value: 52000 },
        ]);
        return;
      }

      const monthData: ChartDataPoint[] = Array.from({ length: 30 }, (_, i) => {
        const day = i + 1;
        const baseValue = 35000 + i * 800;
        const randomFluc = Math.sin(i * 0.5) * 3000;
        return {
          day: `Dec ${day}`,
          value: Math.floor(baseValue + randomFluc),
        };
      });

      resolve(monthData);
    }, 800);
  });
};
