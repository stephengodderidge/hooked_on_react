import { useState } from 'react';

/** Provides Boolean State Management - i.e. a toggle switch */
export const useToggle = (defaultOn = false) => {
  const [isOn, setToggle] = useState(defaultOn);

  const toggleState = () => {
    setToggle(!isOn);
  };

  return { isOn, toggleState };
};
