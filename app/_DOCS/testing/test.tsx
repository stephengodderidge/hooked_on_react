import React, { useState } from 'react';

const SimpleComponent = (props: any) => <div {...props} />;

test('Simple Component Test', () => {
  expect(<SimpleComponent>Lorem ipsum</SimpleComponent>).toMatchSnapshot();
});

const thisOrThat = (chooseThis: boolean) => {
  if (chooseThis) {
    return 'You chose this!';
  }
  return 'You chose that!';
};

describe('Function Unit Test', () => {
  test('thisOrThat - true', () => {
    expect(thisOrThat(true)).toMatchSnapshot();
  });
  test('thisOrThat - false', () => {
    expect(thisOrThat(false)).toMatchSnapshot();
  });
});

const StaticComponent = (props: any) => (
  <>
    <div>Name: {props.name}</div>
    <div>Age: {props.age}</div>
  </>
);
test('StaticComponent Test', () => {
  expect(<StaticComponent name="Bob Ross" age={50} />).toMatchSnapshot();
});

import { render, fireEvent } from 'react-testing-library';

const FunctionalComponent = (props: any) => (
  <>
    <div>Counter is at {props.counter}</div>
    <button onClick={props.onClick}>Increment Counter</button>
  </>
);

test('FunctionalComponent Test', () => {
  const onClick = jest.fn();
  const { getByText } = render(
    <FunctionalComponent counter={0} onClick={onClick} />,
  );
  fireEvent.click(getByText('Increment Counter'));
  expect(onClick).toHaveBeenCalledTimes(1);
});

const ButtonComponent = (props: any) => <button {...props} />;
const DisplayComponent = (props: any) => (
  <div {...props}>Counter is at {props.counter}</div>
);

const IntegrationComponent = () => {
  const [counter, setCount] = useState(0);
  return (
    <>
      <DisplayComponent data-testid="DisplayComponent" counter={counter} />
      <ButtonComponent
        data-testid="ButtonComponent"
        onClick={() => setCount(counter + 1)}
      >
        Increment Counter
      </ButtonComponent>
    </>
  );
};

test('Component Integraion Test', () => {
  const { getByTestId } = render(<IntegrationComponent />);
  expect(getByTestId('DisplayComponent').textContent).toContain('0');
  fireEvent.click(getByTestId('ButtonComponent'));
  expect(getByTestId('DisplayComponent').textContent).toContain('1');
});

const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;

const calculateValue = (addValues: boolean, a: number, b: number) => {
  if (addValues) {
    return add(a, b);
  }
  return subtract(a, b);
};

describe('Function Integration Test', () => {
  test('Calculate Values - Add)', () => {
    const value = calculateValue(true, 1, 2);
    expect(value).toBe(3);
  });
  test('Calculate Values - Subtract)', () => {
    const value = calculateValue(false, 1, 2);
    expect(value).toBe(-1);
  });
});
