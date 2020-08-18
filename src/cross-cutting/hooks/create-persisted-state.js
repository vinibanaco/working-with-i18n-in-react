import { useState } from 'react';

const createPersistedState = (name) => {
  if (!name) {
    throw new Error(`Invalid value supplied to \`name\`: ${name}`);
  }

  return (fallbackValue) => {
    const storageValue = localStorage[name];

    const [state, setState] = useState(storageValue);

    const setValue = (newValue) => {
      setState(newValue);
      localStorage.setItem(name, newValue);
    };

    if (fallbackValue && !storageValue) {
      setValue(fallbackValue);
    }

    return [state, setValue];
  };
};

export default createPersistedState;
