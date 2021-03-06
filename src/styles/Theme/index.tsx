import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import theme from './theme';

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
