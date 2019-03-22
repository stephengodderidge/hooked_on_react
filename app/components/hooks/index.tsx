import { useState } from 'react';

/** Provides Boolean State Management - i.e. a toggle switch */
export const useToggle = (defaultOn = false) => {
  const [isToggled, setToggle] = useState(defaultOn);

  const toggleState = () => {
    setToggle(!isToggled);
  };

  return { isToggled, toggleState };
};
