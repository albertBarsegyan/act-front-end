'use client';

export const localStorageUtils = {
  setItem: <T>(key: string, value: T): void => {
    if (typeof window !== 'undefined') {
      try {
        const hashedValue = JSON.stringify(value);

        localStorage.setItem(key, hashedValue);
      } catch (error) {
        console.error(`Error saving ${key} to localStorage`, error);
      }
    }
  },

  getItem: <T>(key: string): T | null => {
    if (typeof window !== 'undefined') {
      try {
        const hashedValue = localStorage.getItem(key);

        return hashedValue ? (JSON.parse(hashedValue) as T) : null;
      } catch (error) {
        console.error(`Error retrieving ${key} from localStorage`, error);
        return null;
      }
    }
    return null;
  },
  removeItem: (key: string): void => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error(`Error removing ${key} from localStorage`, error);
      }
    }
  },

  clearStorage: (): void => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.clear();
      } catch (error) {
        console.error('Error clearing localStorage', error);
      }
    }
  },
};
