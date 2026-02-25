export interface UserStock {
  id: string;
  symbol: string;
  name: string;
  logoUrl?: string;
  investDate: string;
  volume: string;
  change: number;
  isUp: boolean;
  price: number;
  lots: number;
}

export interface PaginatedStocks {
  items: UserStock[];
  total: number;
}

export interface UserStock {
  id: string;
  symbol: string;
  name: string;
  logoUrl?: string;
  investDate: string;
  volume: string;
  change: number;
  isUp: boolean;
  price: number;
  lots: number;
}

export interface PaginatedStocks {
  items: UserStock[];
  total: number;
}

const ALL_STOCKS: UserStock[] = [
  {
    id: '1',
    symbol: 'AAPL',
    name: 'Apple Inc',
    investDate: '2024-05-22',
    volume: '7.10B',
    change: 5.9,
    isUp: true,
    price: 19.3,
    lots: 250000,
    logoUrl: '/apple.png',
  },
  {
    id: '2',
    symbol: 'TWTR',
    name: 'Twitter Inc',
    investDate: '2024-02-17',
    volume: '2.10B',
    change: 4.6,
    isUp: false,
    price: 23.3,
    lots: 530000,
    logoUrl: '/twitter.png',
  },
  {
    id: '3',
    symbol: 'TSLA',
    name: 'Tesla Inc',
    investDate: '2024-09-01',
    volume: '7.10B',
    change: 2.5,
    isUp: true,
    price: 19.3,
    lots: 250000,
    logoUrl: '/tesla.png',
  },
  {
    id: '4',
    symbol: 'GOGL',
    name: 'Google Corp',
    investDate: '2024-04-13',
    volume: '10.10B',
    change: 1.9,
    isUp: true,
    price: 32.01,
    lots: 400000,
    logoUrl: '/google.png',
  },
  {
    id: '5',
    symbol: 'SPOT',
    name: 'Spotify Technology SA',
    investDate: '2024-02-12',
    volume: '4.20B',
    change: 8.3,
    isUp: false,
    price: 24.32,
    lots: 150000,
    logoUrl: '/spotify.png',
  },
  {
    id: '6',
    symbol: 'AMZN',
    name: 'Amazon Inc',
    investDate: '2024-03-01',
    volume: '5.50B',
    change: 2.3,
    isUp: true,
    price: 21.45,
    lots: 300000,
    logoUrl: '/amazon.png',
  },
  {
    id: '7',
    symbol: 'NFLX',
    name: 'Netflix Inc',
    investDate: '2024-06-15',
    volume: '3.10B',
    change: 1.2,
    isUp: false,
    price: 18.5,
    lots: 120000,
    logoUrl: '/netflix.png',
  },
  {
    id: '8',
    symbol: 'FB',
    name: 'Meta Platforms',
    investDate: '2024-01-30',
    volume: '8.40B',
    change: 3.5,
    isUp: true,
    price: 25.3,
    lots: 400000,
    logoUrl: '/meta.png',
  },
  {
    id: '9',
    symbol: 'MSFT',
    name: 'Microsoft Corp',
    investDate: '2024-04-25',
    volume: '12.10B',
    change: 1.9,
    isUp: true,
    price: 30.12,
    lots: 500000,
    logoUrl: '/microsoft.png',
  },
  {
    id: '10',
    symbol: 'NVDA',
    name: 'NVIDIA Corp',
    investDate: '2024-08-03',
    volume: '9.80B',
    change: 4.5,
    isUp: true,
    price: 27.89,
    lots: 350000,
    logoUrl: '/nvidia.png',
  },
  {
    id: '11',
    symbol: 'BABA',
    name: 'Alibaba Group',
    investDate: '2024-07-11',
    volume: '6.20B',
    change: 0.8,
    isUp: false,
    price: 20.0,
    lots: 200000,
    logoUrl: '/alibaba.png',
  },
  {
    id: '12',
    symbol: 'UBER',
    name: 'Uber Tech',
    investDate: '2024-05-29',
    volume: '4.80B',
    change: 2.1,
    isUp: true,
    price: 15.5,
    lots: 180000,
    logoUrl: '/uber.png',
  },
];

export const fetchUserStocks = async ({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}): Promise<PaginatedStocks> => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const start = (page - 1) * pageSize;
  const items = ALL_STOCKS.slice(start, start + pageSize);

  return {
    items,
    total: ALL_STOCKS.length,
  };
};
