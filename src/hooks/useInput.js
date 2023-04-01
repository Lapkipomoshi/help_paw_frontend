import { useState } from 'react';
import useValidation from './useValidation';

const useInput = (initialValue, validations, errorInputMessage, initialDirty) => {
  const [value, setValue] = useState(initialValue);
  const [dirty, setDirty] = useState(initialDirty);
  const invalidText = useValidation(value, validations, errorInputMessage);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setDirty(true);
  };

  return {
    value, onChange, onBlur, dirty, invalidText,
  };
};

export default useInput;
