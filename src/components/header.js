import React from 'react';
import { Link } from 'gatsby';

import './header.module.scss';
import headerStyles from './header.module.scss';

const Header = () => {
  const { navItem, activeNavItem } = headerStyles;
  return(
    <header className={headerStyles.header}>
      <h1 className={headerStyles.title}>
        <Link to="/">Keyur Patel</Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={navItem} activeClassName={activeNavItem} to="/">Home</Link>
          </li>
          <li>
            <Link className={navItem} activeClassName={activeNavItem} to="/blog">Blog</Link>
          </li>
          <li>
            <Link className={navItem} activeClassName={activeNavItem} to="/about">About</Link>
          </li>
          <li>
            <Link className={navItem} activeClassName={activeNavItem} to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;