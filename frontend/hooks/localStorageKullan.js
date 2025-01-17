import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);

    if (localValue) {
      return JSON.parse(localValue);
    } else {
      return initialValue;
    }
  });

  const setLocalValue = (val) => {
    setValue(val);
    localStorage.setItem(key, val);
  };

  return [value, setLocalValue];
}
export default useLocalStorage;
