import { useState } from 'react';

const createPersistedState = (name, { fallbackValue = undefined }) => {
  if (!name) {
    throw new Error(`Invalid value supplied to \`name\`: ${name}`);
  }

  return (initialValue = fallbackValue) => {
    const storageValue = localStorage[name];

    const [state, setState] = useState(storageValue);

    const setValue = (newValue) => {
      setState(newValue);
      localStorage.setItem(name, newValue);
    };

    if (initialValue && !storageValue) {
      setValue(initialValue);
    }

    return [state, setValue];
  };
};

export default createPersistedState;
