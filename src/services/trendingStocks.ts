export interface StockStat {
  id: string;
  name: string;
  symbol: string;
  price: number;
  changePercent: number;
  isUp: boolean;
  logoUrl?: string;
}

export const MOCK_STOCKS: StockStat[] = [
  {
    id: '1',
    name: 'Apple Inc',
    symbol: 'AAPL',
    price: 15238.0,
    changePercent: 5.9,
    isUp: true,
    logoUrl: '/apple.png',
  },
  {
    id: '2',
    name: 'Google Corp',
    symbol: 'GOGL',
    price: 6842.0,
    changePercent: 1.9,
    isUp: true,
    logoUrl: '/google.png',
  },
  {
    id: '3',
    name: 'Spotify Technology SA',
    symbol: 'SPOT',
    price: 12238.0,
    changePercent: 8.3,
    isUp: false,
    logoUrl: '/spotify.png',
  },
  {
    id: '4',
    name: 'Twitter Inc',
    symbol: 'TWTR',
    price: 55238.0,
    changePercent: 4.6,
    isUp: true,
    logoUrl: '/twitter.png',
  },
];

export const fetchTopStocks = (): Promise<StockStat[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_STOCKS), 800);
  });
};
