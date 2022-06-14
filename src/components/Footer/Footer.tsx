import React from 'react';

import Button from '../Button/Button';

import filters from '../../utils/constants';
import { FooterProps } from '../../types/footer';

import './Footer.css';

function Footer({ activeTodosCount, filterHandler, removeHandler }: FooterProps) {
  const changeFilter = (selectedFilter: string): void => {
    filterHandler(selectedFilter);
  };

  return (
    <footer className="footer">
      <p className="footer__remains">{`${activeTodosCount} items left`}</p>
      <ul className="footer__filters">
        {filters.length && filters.map((filter) => (
          <li
            className="filter"
            key={filter.id}
            onClick={() => changeFilter(filter.value)}
            role="presentation"
          >
            {filter.value}
          </li>
        ))}
      </ul>
      <Button text="Clear completed" clickHandler={removeHandler} />
    </footer>
  );
}

export default Footer;
