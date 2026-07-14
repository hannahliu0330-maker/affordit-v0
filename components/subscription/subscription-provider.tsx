"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type SubscriptionContextValue = {
  isPremium: boolean;
  upgradeToPremium: () => void;
  downgradeToFree: () => void;
};

const SubscriptionContext = createContext<SubscriptionContextValue | null>(null);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const [isPremium, setIsPremium] = useState(false);

  const value = useMemo(
    () => ({
      isPremium,
      upgradeToPremium: () => setIsPremium(true),
      downgradeToFree: () => setIsPremium(false),
    }),
    [isPremium],
  );

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  const context = useContext(SubscriptionContext);

  if (!context) {
    throw new Error("useSubscription must be used within SubscriptionProvider");
  }

  return context;
}
