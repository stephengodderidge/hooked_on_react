import { useState } from 'react';

/** Object returned by useToggle hook */
interface IUseToggleHook {
  /** Whether Toggle is on or off */
  isOn: boolean;
  /** Callback for flipping the state of the Toggle */
  toggleState?: () => void;
}

/** Provides Boolean State Management - i.e. a toggle switch */
export const useToggle = (defaultOn: boolean = false): IUseToggleHook => {
  const [isOn, setToggle] = useState(defaultOn);

  const toggleState = () => {
    setToggle(!isOn);
  };

  return { isOn, toggleState };
};
