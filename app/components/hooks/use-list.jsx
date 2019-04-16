import { useState } from 'react';

export const useList = initialList => {
  const [list, setList] = useState(initialList);

  const updateList = newItem => {
    const newList = list.includes(newItem)
      ? list.filter(listItem => listItem !== newItem)
      : list.concat(newItem);
    setList(newList);
  };
  return { list, updateList };
};
