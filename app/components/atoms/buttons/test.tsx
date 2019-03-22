import { Button } from './primary';
import React from 'react';
import { render, fireEvent } from 'react-testing-library';

describe('Button', () => {
  test('Does Click', () => {
    const id = 'myButton';
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Button data-testid={id} onClick={onClick}>
        Click Me!
      </Button>,
    );

    fireEvent.click(getByTestId(id));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
