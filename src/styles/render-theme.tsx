import { render, RenderResult } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import { BlogThemeProvider } from '../contexts/BlogThemeContext';

import { theme } from './theme';

export const renderTheme = (children: React.ReactNode): RenderResult => {
  return render(<BlogThemeProvider>{children}</BlogThemeProvider>);
};
