import { createContext } from 'react';

const UserContext = createContext({
  language: null,
  setLanguage: () => {},
});

export default UserContext;
