import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import './BurgerMenu.scss';
import BurgerPopup from '../BurgerPopup/BurgerPopup';

const BurgerMenu = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const isMobileMenuButtonVisible = useMediaQuery({
    maxWidth: 1199,
  });

  const toggleBurgerMenu = () => {
    setBurgerOpen(!isBurgerOpen);
  };

  const handleNavLinkClick = () => {
    setBurgerOpen(false);
  };

  useEffect(() => {
    if (!isMobileMenuButtonVisible) {
      setBurgerOpen(false);
    }
  }, [isMobileMenuButtonVisible]);

  return (
    <>
      {isMobileMenuButtonVisible && (
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
