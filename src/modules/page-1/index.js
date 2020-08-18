import React from 'react';

import styles from './index.module.css';
import i18n from './i18n';
import useLanguage from '../../cross-cutting/hooks/use-language';

function Page1() {
  const [language] = useLanguage();

  return (
    <>
      <h1 className={styles.title}>{i18n[language].TITLE}</h1>
      <p className={styles.text}>{i18n[language].TEXT}</p>
    </>
  );
}

export default Page1;
