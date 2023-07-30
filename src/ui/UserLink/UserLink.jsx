import React from 'react';
import { Link } from 'react-router-dom';
import './UserLink.css';

function UserLink({ modifier, linkText, linkAddress }) {
  return (
    <Link className={`link link__${modifier}`} to={linkAddress} target='_self'>{linkText}</Link>
  );
}

export default UserLink;
