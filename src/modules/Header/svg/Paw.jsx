import React from 'react';
import './Paw.css';

const Paw = ({ className }) => {
  return (
    <svg className={`paw ${className}`} width='145' height='56' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path fillRule='evenodd' clipRule='evenodd'
        d='M37.5 54.7c2.1-.6 4.2-1.2 6.3-2l1-.4 1.8-1 2.2-1 2.4-1.6.3-.3c.3-.4.7-.6 1-.6.4-.5.6-1 1-1
      .4-.3.6-.7.8-1l.3-.4 1.6-2.2c-.1-.4.3-.4.4-.7 0-.3.3-.5.5-.8l.7-1c.4-1.6 1.1-3 1.4-4.6l.7-3c.2-.4.4-1
      .3-1.3a12 12 0 0 1-.3-2.5v-1.9L60
      25c0-.9 0-1.8-.3-2.6S59 20.8 59
      20c-.2-1.3-.7-2.4-1.3-3.6-.3-.7-.3-1.5-.9-2.2v-.4l-.1-.9-1.1-1.2-.5-.3c-.6-.5-1-1.1-1.6-1.5l-.7-.4c-.7-.6-1.5-1-2.3-1.5l-1.2-.7L46.7
      6a2 2 0 0 1-.4-.2l-.8-.7c-.3-.2-.7-.2-1-.5-.8-.7-1.8-.8-2.9-1-.9
      0-1.7-.3-2.5-.7l-2.2-.8-2.8-.8c-.4-.2-.8-.2-1.2-.2-1.3-.2-2.5-.6-3.8-.3h-.5l-.7-.2h-4.3l-.7.1c-.6.3-1.2.2-1.8.3-.6
      0-1.2 0-1.9.2-.8.1-1.7.3-2.5.6l-2.1.5-1.7 1c-.7.3-1.3 1-2 1.2h-.1l-2.4 2c-.3.3-.8.5-1
      .8-.2.7-1 .7-1.3 1.4-.5.3-.8.7-1.1 1.1l-.7.7-.8.8c-.5.9-1 1.7-1.3 2.6-.5 1.1-.8 2.2-1.1 3.3l-.5
      2-.1 1c-.2 1-.5 1.9-.5 2.9l.2 4.2.2 2 .2 1.3c0 1.2.3 2.4.5 3.7.2.7.5 1.3.4 2 0 .1 0 .3.2.4.6 1
      .7 2 .7 3.2-.1 1.2.2 2.4 1.1 3.3l1 1.1 1 .8.3.3c.6.7 1 1.5 1.6 2.1l.9.8 1.9 1.3c.4.3.7.7 1.3.7.2
      0 .3.2.4.3l.7.4 1.9 1c.7.4 1.4 1 2.3 1.1l.2.1 1.6.8c.7.3 1.5.4 2.2.6h1.4c.9.2 1.8 0 2.6.3.2.1.5 0 .8
      0h.5l1.5.1h3.3c1.2 0 2.3 0 3.5.2 1 0 2.1-.4 3.1-.6ZM12 10.2c0-.3.2-.5.4-.6 1-.5 1.8-1.2 3-1.6-.2.6-.4 1-.3
      1.6 0 0-.2.4-.3.3-.6-.2-1 .3-1.5.3h-1.3Zm9.3 2.8-.5-.4c.2-.3.4-.4.7-.2.4.2.9.2 1.3.3l.7.2v.1h-2.2ZM45
      15.3c.7.1 1.3.6 1.7 1.3L45 15.3Zm-28.6 3.5 1.1.8c-.6 0-1-.2-1.1-.8Zm3.5 2 .5.4c-.4 0-.4 0-.5-.4Zm27
      1.2c-.3-.2-.6-.3-.9-.2-.5.3-.8 0-1.2-.3-.3-.3-.2-.7 0-1.1l1.4.6 1.6 1 .6.6-.1.2-1.4-.8Zm-44 8.6-.2-.6.3.2v.4h-.2ZM31
      28.8h.5l5.1 2.4c-.8 0-4.6-1.6-5.6-2.4Zm-14.2 2.5v-.1l1.4.5c.2 0 .2.2 0 .7l-1.4-1.1Zm12.9 1c.7 0
      1 .1.9.7l-1-.8ZM45 45.4c.3-.3.6-.8 1.3-.6l-1.3.7v-.1Zm-23 4.3c0-.3.2-.5.3-.7.4 0 .8.2 1.1.3l1
      .3c-.6.3-1 .4-2.4.1Zm2.7 0c.6-.5.6-.5.9.2l-.9-.2Z' fill='#FF712C'/>
      <path d='M30.1 26c-4.3 0-8 2.6-10 7-1.5 3.4-1.4 7 .3 8.7.9 1 2 1.4 3 1.4 1.7 0 3.2-1 4.6-1.8.8-.5 1.7-1
      2.1-1 .5 0 1.4.5 2.2 1 1.4.8 2.9 1.7 4.5 1.7 1.2 0 2.2-.4 3-1.3 1.8-1.7 1.9-5.4.4-8.9a10.9
      10.9 0 0 0-10-6.8Zm8.2 14.3a2 2 0 0 1-1.5.7c-1 0-2.3-.7-3.4-1.4s-2.2-1.3-3.3-1.3c-1 0-2.1.6-3.3
      1.3-1 .7-2.3 1.5-3.3 1.5-.6 0-1.1-.3-1.6-.8-1-1-1.2-3.6.1-6.5.6-1.4 3-5.8 8.1-5.8s7.4 4 8.1 5.6c1.3
      3 1.1 5.7.1 6.7ZM25.8 24.4h.6c2.3-.5 3.6-3.3 3-6.5-.6-2.8-2.5-4.9-4.6-4.9h-.6c-2.3.5-3.6 3.3-3 6.5.6
      2.8 2.5 4.9 4.6 4.9ZM24.6 15h.2c1 0 2.2 1.3 2.5 3.3.5 2.1-.3 3.9-1.3 4h-.2c-1 0-2.1-1.2-2.5-3.2-.4-2.1.4-3.9
      1.3-4ZM20.7 23.2a5.3 5.3 0 0 0-4-2.3c-.7 0-1.4.2-2 .6-1.6 1.2-1.7 4-.1 6.1 1 1.5 2.6 2.4 4
      2.4.7 0 1.4-.2 2-.6 1.6-1.2 1.7-4 .1-6.2Zm-1.4 4.6a1 1 0 0 1-.7.2c-.7
      0-1.7-.6-2.3-1.5-1-1.4-1-3-.3-3.4.2-.2.4-.2.7-.2.8 0 1.7.6 2.3 1.5 1 1.4 1 2.9.3 3.4ZM33.8 24.3h.7c2 0
      4-2 4.5-4.8.6-3.2-.7-6-3-6.4h-.6c-2 0-4 2-4.5 4.8-.6 3.2.7 6 3 6.4Zm-1-6c.5-2 1.7-3.3
      2.6-3.3h.2c1 .2 1.8 2 1.4 4.1-.4 2-1.6 3.3-2.5 3.3h-.2c-1-.2-1.8-2-1.4-4.1ZM45.5
      21.5c-.6-.4-1.2-.6-2-.6-1.4 0-3 .9-4 2.3-1.6 2.2-1.5 5 .2 6.2.5.4 1.2.6 1.9.6 1.5 0
      3-.9 4-2.4 1.6-2.2 1.6-4.9-.1-6.1Zm-1.5 5c-.7 1-1.6 1.5-2.4 1.5a1 1 0 0 1-.6-.2c-.7-.5-.8-2 .2-3.4.7-1 1.6-1.5
      2.4-1.5.2 0 .4 0 .6.2.7.5.8 2-.2 3.4Z' fill='white'/>
      <path d='M81.7 11.4c1 0 1.8.2 2.5.6.7.3 1.2.9 1.6 1.6.4.8.6 1.7.6 2.7v6.4h-1.6v-6.5c0-1.1-.3-2-.8-2.5a3
      3 0 0 0-2.3-.8 3 3 0 0 0-2.2.8c-.6.6-.9 1.4-.9 2.5v6.5h-2.9v-1.3H77v-5c0-1.1.2-2 .6-2.8a4 4 0
      0 1 1.7-1.6c.7-.4 1.5-.6 2.4-.6Zm15.6 2.9v8.4h-1.5v-1.3c-.3.5-.7.8-1.3 1a4.5 4.5 0 0
      1-4-.2 4 4 0 0 1-1.4-1.4c-.4-.7-.6-1.4-.6-2.3 0-.9.2-1.6.6-2.3a4 4 0 0 1 1.5-1.5 4.5 4.5
      0 0 1 3.9-.2c.5.3 1 .6 1.3 1v-1.2h1.5Zm-4.4 7.2c.6 0 1-.1 1.5-.4.4-.2.8-.6 1-1 .3-.5.4-1
      .4-1.6 0-.6-.1-1.1-.4-1.5-.2-.5-.6-.9-1-1.1a3 3 0 0 0-1.5-.4 2.7 2.7 0 0 0-2.5 1.4c-.2.5-.3
      1-.3 1.6 0 .6.1 1.1.3 1.6.3.4.6.8 1 1 .5.3 1 .4 1.5.4Zm15.2-7.2v8.4h-1.5v-7h-4.8v7h-1.6v-8.4h7.9Zm6.3
      4.9h-1.8v3.5h-1.5v-8.4h1.5v3.5h1.8l2.8-3.5h1.6l-3.2 4 3.4 4.4h-1.8l-2.8-3.5Zm13.8-5v8.5h-1.5v-1.2c-.3.4-.7.8-1.2 1-.5.2-1
      .3-1.6.3-1.2 0-2-.3-2.7-.9-.7-.6-1-1.5-1-2.8v-4.8h1.6V19c0 .8.2 1.4.5 1.8.4.5 1 .7 1.7.7.9 0 1.5-.3
      2-.8.4-.5.7-1.2.7-2v-4.4h1.5ZM80 31.6v11.2h-1.6V33h-6.5v9.8h-1.5V31.5h9.6Zm6.9 11.3a4.1 4.1 0
      0 1-4.4-4.3c0-.8.1-1.6.5-2.2a4 4 0 0 1 1.6-1.6c.7-.3 1.4-.5 2.3-.5.8 0 1.6.2 2.2.5a4.3 4.3 0
      0 1 2.1 3.8c0 .8-.1 1.6-.5 2.2a4 4 0 0 1-1.6 1.6c-.6.4-1.4.5-2.2.5Zm0-1.3c.5 0 1-.1
      1.4-.4.5-.2.8-.6 1-1 .3-.5.4-1 .4-1.6 0-.6-.1-1.1-.3-1.5-.3-.5-.6-.9-1-1.1-.5-.3-1-.4-1.5-.4a2.7
      2.7 0 0 0-2.5 1.4c-.3.5-.4 1-.4 1.6 0 .6.1 1.1.4 1.6.2.4.6.8 1 1 .4.3 1 .4
      1.5.4Zm16.4-7.2v8.4h-1.4v-6.1l-3.2 5.2H98l-3.1-5.3v6.2h-1.4v-8.4H95l3.3 5.7 3.4-5.7h1.5Zm6.6
      8.5a4.1 4.1 0 0 1-4.4-4.3c0-.8.2-1.6.5-2.2a4 4 0 0 1 1.6-1.6c.7-.3 1.4-.5 2.3-.5.8 0 1.6.2
      2.2.5a4.3 4.3 0 0 1 2.1 3.8c0 .8-.1 1.6-.5 2.2a4 4 0 0 1-1.6 1.6c-.6.4-1.4.5-2.2.5Zm0-1.3c.5
      0 1-.1 1.4-.4.5-.2.8-.6 1-1 .3-.5.4-1 .4-1.6 0-.6 0-1.1-.3-1.5-.3-.5-.6-.9-1-1.1-.5-.3-1-.4-1.5-.4a2.7 2.7
      0 0 0-2.5 1.4c-.3.5-.4 1-.4 1.6 0 .6.1 1.1.4 1.6.2.4.6.8 1 1 .5.3 1 .4
      1.5.4Zm18.7-7.2v8.4h-12v-8.4h1.4v7.1h3.8v-7.1h1.5v7.1h3.8v-7.1h1.5Zm1.3
      7.1v3.2h-1.5v-1.9H127v-1.3h2.9Zm9.4-7.1v8.4h-1.5v-1.2c-.3.4-.7.8-1.2 1-.5.2-1 .3-1.6.3-1.2
      0-2-.3-2.7-.9-.7-.6-1-1.5-1-2.8v-4.8h1.6V39c0 .8.1 1.4.5 1.8.4.5 1 .7 1.7.7.8
      0 1.5-.3 2-.8.4-.5.7-1.2.7-2v-4.4h1.5Z' fill='#FF712C'/>
    </svg>
  );
};

export default Paw;
