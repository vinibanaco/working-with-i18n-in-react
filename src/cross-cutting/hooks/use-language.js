import createPersistedState from './create-persisted-state';

const useLanguage = (fallbackValue = 'enUS') => {
  const useLanguageState = createPersistedState('language', { fallbackValue });
  return useLanguageState;
};

export default useLanguage;
