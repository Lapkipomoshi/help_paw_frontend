import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileSheltersBlock.scss';
import ShelterCard from '../ShelterCard/ShelterCard';
import Button from '../../ui/Button/Button';

const ProfileSheltersBlock = ({ myShelters, sheltersTitle }) => {
  const navigate = useNavigate();

  return (
    <div className='profile-shelters'>
      {myShelters && myShelters.length !== 0 &&
        <div className='profile-shelters__container'>
          <h3 className='profile-shelters__title standard-font standard-font_type_h3'>{sheltersTitle}</h3>
          <div className='profile-shelters__shelters'>
            <ul className='profile-shelters__shelters-container'>
              {myShelters.map((shelter) => {
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
            {myShelters && <Button onClick={
              () => {return navigate('my-shelter');}
            }>Перейти в приют</Button>}
          </div>
        </div>
      }
    </div>
  );
};

export default ProfileSheltersBlock;
