import React from 'react';
import './UserContainer.css';
import Dog from '../../images/dog.png';

function UserContainer({children}) {
    return (
        <div className='user-container'>
            <img className='user-container__image' src={Dog} alt='Собака'/>

            {children}

        </div>
    );
}

export default UserContainer;
