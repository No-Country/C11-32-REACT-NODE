import { useState, useEffect } from "react";

export default function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, (newValue: T | ((currentValue: T) => T)) => void] {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    const listener = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(JSON.parse(e.newValue ?? ""));
      }
    };
    window.addEventListener("storage", listener);

    return () => {
      window.removeEventListener("storage", listener);
    };
  }, [key, defaultValue]);

  const setValueInLocalStorage = (newValue: T | ((currentValue: T) => T)) => {
    setValue((currentValue) => {
      const result =
        typeof newValue === "function"
          ? (newValue as (currentValue: T) => T)(currentValue)
          : newValue;
      localStorage.setItem(key, JSON.stringify(result));
      return result;
    });
  };

  return [value, setValueInLocalStorage];
}
