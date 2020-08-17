import React from 'react';

import styles from './index.module.css';
import i18n from './i18n';

function Page1() {
  return (
    <>
      <h1 className={styles.title}>{i18n.enUS.TITLE}</h1>
      <p className={styles.text}>{i18n.enUS.TEXT}</p>
    </>
  );
}

export default Page1;
