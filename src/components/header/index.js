import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <Link to="/page-1" className={styles.menuLink}>
          Page 1
        </Link>
        <Link to="/page-2" className={styles.menuLink}>
          Page 2
        </Link>
      </nav>

      <div>
        <button className={styles.languageButton} disabled>
          <span role="img" aria-label="Change language to Portuguese">
            🇧🇷
          </span>
        </button>

        <button className={styles.languageButton} disabled>
          <span role="img" aria-label="Change language to English">
            🇺🇸
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
