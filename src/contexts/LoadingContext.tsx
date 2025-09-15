"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface LoadingContextType {
  isLoading: boolean;
  hasLoadedOnce: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  useEffect(() => {
    // Check if user has already seen the loading screen in this session
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');
    
    if (hasSeenLoading) {
      setIsLoading(false);
      setHasLoadedOnce(true);
    }
  }, []);

  const handleSetIsLoading = (loading: boolean) => {
    setIsLoading(loading);
    if (!loading) {
      setHasLoadedOnce(true);
      sessionStorage.setItem('hasSeenLoading', 'true');
    }
  };

  return (
    <LoadingContext.Provider value={{ 
      isLoading, 
      hasLoadedOnce, 
      setIsLoading: handleSetIsLoading 
    }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}