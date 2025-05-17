import { useContext } from 'react';
import { FrappeAuthContext } from './frappeAuthContext';

export function useFrappeAuth() {
  const context = useContext(FrappeAuthContext);
  if (!context) {
    throw new Error('useFrappeAuth must be used within a FrappeAuthProvider');
  }
  return context;
}