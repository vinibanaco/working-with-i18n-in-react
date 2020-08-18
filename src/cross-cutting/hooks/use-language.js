import { useContext } from 'react';

import UserContext from '../contexts/user';

const useLanguage = () => {
  const { language, setLanguage } = useContext(UserContext);
  return [language, setLanguage];
};

export default useLanguage;
