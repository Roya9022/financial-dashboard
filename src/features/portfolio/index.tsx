import {
  PortfolioTrendingStocks,
  PortfolioValuesCard,
  PortfolioStatsChart,
  ProfileStocksTable,
} from './components';

const PortfolioDashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 flex-1 min-h-0">
      <div className="lg:shrink-0">
        <PortfolioTrendingStocks />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:shrink-0 lg:h-70">
        <div className="lg:col-span-2 lg:h-full">
          <PortfolioValuesCard />
        </div>
        <div className="lg:col-span-3 lg:h-full">
          <PortfolioStatsChart />
        </div>
      </div>
      <div className="flex-1 lg:min-h-0 flex flex-col">
        <ProfileStocksTable />
      </div>
    </div>
  );
};
export default PortfolioDashboard;
