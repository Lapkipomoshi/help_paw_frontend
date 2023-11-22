import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './HelpToShelter.css';
import { Button } from '../../ui';
import DeclarationInput from '../../ui/DeclarationInput/DeclarationInput';
import * as regex from '../../utils/regex';
import * as errorMessage from '../../utils/errorMessage';
import useInput from '../../hooks/useInput';

const HelpToShelter = () => {
  const materialAid = useInput('', { notEmpty: true, maxLength: 12, regex: regex.NUMBER }, errorMessage.DONATION_AMOUNT);
  const { isOwner, isAuth, isShelterOwner } = useOutletContext();

  return (
    <section className='shelter-section help-to-shelter'>
      { !isOwner && (
        <div className='help-to-shelter__mat'>
          <h2 className='shelter-section__title help-to-shelter__title'>Материальная помощь</h2>
          { (isShelterOwner || isAuth) && (isAuth || isShelterOwner) && (
            <DeclarationInput
              caption='Какую сумму вы хотите пожертвовать?'
              inputState={materialAid}
              type='number'
              name='salaryInput'
              required
              placeholder='1000'
            />
          )}
          <Button className='help-to-shelter__button' disabled={!isAuth && !isShelterOwner}>Пожертвовать деньги</Button>
        </div>
      )}
      <div className='help-to-shelter__nonmat'>
        <h2 className='shelter-section__title help-to-shelter__title'>Нематериальная помощь</h2>
        <Button className='help-to-shelter__button'>Выгулять питомца</Button>
      </div>
    </section>
  );
};

export default HelpToShelter;
