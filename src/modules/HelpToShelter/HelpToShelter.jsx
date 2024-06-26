import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import './HelpToShelter.css';
import { Button } from '../../ui';
import DeclarationInput from '../../ui/DeclarationInput/DeclarationInput';
import * as regex from '../../utils/regex';
import * as errorMessage from '../../utils/errorMessage';
import useInput from '../../hooks/useInput';
import { donateToShelter } from './ApiHelpToShelter';


const HelpToShelter = () => {
  const { id } = useParams();
  const materialAid = useInput('', { notEmpty: true, maxLength: 12, regex: regex.NUMBER, isZero: true }, errorMessage.DONATION_AMOUNT);
  const { shelter } = useOutletContext();
  const handleDonate = async () => {
    const donationAmount = parseInt(materialAid.value, 10);
    if ((donationAmount > 0) && (materialAid.value.length < 12)) {
      try {
        const paymentConfirmUrl = await donateToShelter(id, donationAmount);
        window.open(paymentConfirmUrl, '_blank');
      } catch (error) {
        throw new Error(error.message);
      }
    }
  };

  return (
    <section className='shelter-section help-to-shelter'>
      {shelter.is_partner && (
        <div className='help-to-shelter__mat'>
          <h2 className='shelter-section__title help-to-shelter__title'>Материальная помощь</h2>
          <DeclarationInput
            caption='Какую сумму вы хотите пожертвовать?'
            inputState={materialAid}
            type='number'
            name='salaryInput'
            required
            placeholder='1000'
          />
          <Button
            className='help-to-shelter__button'
            onClick={handleDonate}
            disabled={materialAid.value === ''}
          >
            Пожертвовать деньги
          </Button>
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
