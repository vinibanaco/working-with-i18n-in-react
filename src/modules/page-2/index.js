import React, { useContext } from 'react';

import styles from './index.module.css';
import i18n from './i18n';

import UserContext from '../../cross-cutting/contexts/user';

function Page2() {
  const { language } = useContext(UserContext);

  return (
    <>
      <h1 className={styles.title}>{i18n[language].TITLE}</h1>
      <p className={styles.text}>{i18n[language].TEXT}</p>
    </>
  );
}

export default Page2;
