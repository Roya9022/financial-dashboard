export interface PortfolioSummary {
  totalBalance: number;
  monthlyProfit: number;
  growthPercentage: number;
  isGrowthPositive: boolean;
}

export const fetchPortfolioSummary = (): Promise<PortfolioSummary> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalBalance: 17580.0,
        monthlyProfit: 4780.0,
        growthPercentage: 5.9,
        isGrowthPositive: true,
      });
    }, 600);
  });
};
