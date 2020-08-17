import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.css';
import i18n from './i18n';
import UserContext from '../../cross-cutting/contexts/user';

function Header() {
  const { language } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <Link to="/page-1" className={styles.menuLink}>
          {i18n[language].MENU_LINKS.PAGE_1}
        </Link>
        <Link to="/page-2" className={styles.menuLink}>
          {i18n[language].MENU_LINKS.PAGE_2}
        </Link>
      </nav>

      <div>
        <button className={styles.languageButton} disabled>
          <span
            role="img"
            title={i18n[language].LANGUAGE_BUTTONS.PORTUGUESE}
            aria-label={i18n[language].LANGUAGE_BUTTONS.PORTUGUESE}
          >
            🇧🇷
          </span>
        </button>

        <button className={styles.languageButton} disabled>
          <span
            role="img"
            title={i18n[language].LANGUAGE_BUTTONS.ENGLISH}
            aria-label={i18n[language].LANGUAGE_BUTTONS.ENGLISH}
          >
            🇺🇸
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
