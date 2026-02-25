import {
  LayoutGrid,
  Briefcase,
  PieChart,
  BarChart2,
  Globe,
  User,
} from 'lucide-react';
import { ROUTES } from './routes';

export const NAV_ITEMS = [
  { label: 'Overview', icon: LayoutGrid, path: ROUTES.OVERVIEW },
  { label: 'My Stock', icon: Briefcase, path: ROUTES.MY_STOCK },
  { label: 'Portfolio', icon: PieChart, path: ROUTES.PORTFOLIO },
  { label: 'Analytic', icon: BarChart2, path: ROUTES.ANALYTIC },
  { label: 'Community', icon: Globe, path: ROUTES.COMMUNITY },
  { label: 'Account', icon: User, path: ROUTES.ACCOUNT },
];
