import React, { useState, useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import BurgerPopup from '../BurgerPopup/BurgerPopup';
import './BurgerMenu.scss';

const BurgerMenu = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const isBurgerVisible = useMediaQuery({
    maxWidth: 1199,
  });

  const toggleBurgerMenu = () => {
    setBurgerOpen(!isBurgerOpen);
  };

  const handleNavLinkClick = useCallback(() => {
    setBurgerOpen(false);
  }, []);

  useEffect(() => {
    if (!isBurgerVisible) {
      setBurgerOpen(false);
    }
  }, [isBurgerVisible]);

  return (
    <>
      {isBurgerVisible && (
        <button className={`burger ${isBurgerOpen ? 'open' : ''}`} onClick={toggleBurgerMenu} type='button'>
          <div className='line' />
          <div className='line' />
          <div className='line' />
        </button>
      )}
      {isBurgerOpen && <BurgerPopup onNavLinkClick={handleNavLinkClick} />}
    </>
  );
};

export default BurgerMenu;
