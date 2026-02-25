export const theme = {
  colors: {
    brand: {
      DEFAULT: 'var(--color-brand)',
      light: 'var(--color-brand-light)',
      dark: 'var(--color-brand-dark)',
    },
    background: {
      primary: 'var(--color-bg-primary)',
      secondary: 'var(--color-bg-secondary)',
    },
    text: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
    },
    border: 'var(--color-border-default)',
    success: 'var(--color-success)',
    danger: 'var(--color-danger)',
  },
  spacing: {
    '62.5': 'var(--spacing-62_5)',
    '87.5': 'var(--spacing-87_5)',
  },
} as const;
