import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.css';
import i18n from './i18n';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <Link to="/page-1" className={styles.menuLink}>
          {i18n.enUS.MENU_LINKS.PAGE_1}
        </Link>
        <Link to="/page-2" className={styles.menuLink}>
          {i18n.enUS.MENU_LINKS.PAGE_2}
        </Link>
      </nav>

      <div>
        <button className={styles.languageButton} disabled>
          <span
            role="img"
            title={i18n.enUS.LANGUAGE_BUTTONS.PORTUGUESE}
            aria-label={i18n.enUS.LANGUAGE_BUTTONS.PORTUGUESE}
          >
            🇧🇷
          </span>
        </button>

        <button className={styles.languageButton} disabled>
          <span
            role="img"
            title={i18n.enUS.LANGUAGE_BUTTONS.ENGLISH}
            aria-label={i18n.enUS.LANGUAGE_BUTTONS.ENGLISH}
          >
            🇺🇸
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
