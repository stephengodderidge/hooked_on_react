import { useState } from 'react';

export const useList = (initialList: string[]) => {
  const [list, setList] = useState(initialList);

  const updateList = (newItem: string): void => {
    list.filter(listItem => listItem !== newItem);
  };
  return { list, updateList };
};
