import React from 'react';
import './ProfileSheltersBlock.scss';
import ShelterCard from '../ShelterCard/ShelterCard';
import Button from '../../ui/Button/Button';
import CardsSlider from '../CardsSlider/CardsSlider';

const ProfileSheltersBlock = ({ shelters, sheltersTitle, owner }) => {
  return (
    <div className='profile-shelters'>
      {shelters && shelters.length !== 0 &&
        <div className='profile-shelters__container'>
          <h3 className='profile-shelters__title standard-font standard-font_type_h3'>{sheltersTitle}</h3>

          <div className='profile-shelters__shelters'>
            <CardsSlider modifier='profile'>
              <ul className='profile-shelters__shelters-container'>
                {shelters.map((shelter) => {
                  return (
                    <li key={shelter.id}>
                      <ShelterCard
                        id={shelter.id}
                        name={shelter.name}
                        address={shelter.address}
                        workingFromHour={shelter.working_from_hour}
                        workingToHour={shelter.working_to_hour}
                        workingHours={shelter.working_hours}
                        logo={shelter.logo}
                        profileImage={shelter.profile_image}
                      />
                    </li>
                  );
                })}
              </ul>
            </CardsSlider>

            {owner && <Button link to='/'>Перейти в приют</Button>}
          </div>
        </div>
      }
    </div>
  );
};

export default ProfileSheltersBlock;
