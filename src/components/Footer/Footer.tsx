import React, { useState } from 'react';

import Button from '../Button/Button';

import { filters } from '../../utils/constants';
import { FooterProps } from '../../types/footer';

import './Footer.css';

function Footer({ activeTodosCount, filterHandler, removeHandler }: FooterProps) {
  const [activeFilter, setActiveFilter] = useState<number>(0);

  const changeFilter = (selectedFilter: string): void => {
    filterHandler(selectedFilter);
    const selectedFilterIndex = filters.findIndex((item) => item.value === selectedFilter);
    setActiveFilter(selectedFilterIndex);
  };

  return (
    <footer className="footer">
      <p className="footer__remains">{`${activeTodosCount} items left`}</p>
      <ul className="footer__filters">
        {filters.length && filters.map((filter, index) => (
          <li
            className={`filter ${activeFilter === index ? 'filter_type_active' : ''}`}
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
