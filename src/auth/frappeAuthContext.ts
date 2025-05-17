import { createContext } from 'react';

interface FrappeAuthContextType {
  currentUser: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

export const FrappeAuthContext = createContext<FrappeAuthContextType | undefined>(undefined);
