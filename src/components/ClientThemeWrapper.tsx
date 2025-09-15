'use client';

import React from 'react';
import { ThemeProvider } from '@/hooks/useTheme';

interface ClientThemeWrapperProps {
  children: React.ReactNode;
}

export default function ClientThemeWrapper({ children }: ClientThemeWrapperProps) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}