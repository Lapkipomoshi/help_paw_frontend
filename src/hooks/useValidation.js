/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { useEffect, useState } from 'react';

const useValidation = (value, validations, errorValidateMessage) => {
  const [errorText, setErrorText] = useState('');
  const [emptyError, setEmptyError] = useState(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [regexError, setRegexError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
      case 'empty':
        value ? setEmptyError(false) : setEmptyError(true);
        break;
      case 'minLength':
        value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
        break;
      case 'maxLength':
        value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
        break;
      case 'regex':
        validations[validation].test(value) ? setRegexError(false) : setRegexError(true);
        break;
      default:
        break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (emptyError) {
      setErrorText(errorValidateMessage.NOT_FOUND);
    } else if (minLengthError) {
      setErrorText(errorValidateMessage.TOO_SHORT);
    } else if (maxLengthError) {
      setErrorText(errorValidateMessage.TOO_LONG);
    } else if (regexError) {
      setErrorText(errorValidateMessage.INVALID);
    } else {
      setErrorText('');
    }
  }, [emptyError, minLengthError, maxLengthError, regexError]);

  return errorText;
};

export default useValidation;
