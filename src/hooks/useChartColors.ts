import { useMemo } from 'react';

export const useChartColors = () => {
  return useMemo(() => {
    const styles =
      typeof window !== 'undefined'
        ? getComputedStyle(document.documentElement)
        : null;

    return {
      brand: styles?.getPropertyValue('--color-brand').trim() || '#7C3AED',
      bgSecondary:
        styles?.getPropertyValue('--color-bg-secondary').trim() || '#FFFFFF',
      textPrimary:
        styles?.getPropertyValue('--color-text-primary').trim() || '#111827',
      textSecondary:
        styles?.getPropertyValue('--color-text-secondary').trim() || '#6B7280',
      border:
        styles?.getPropertyValue('--color-border-default').trim() || '#E5E7EB',
    };
  }, []);
};
