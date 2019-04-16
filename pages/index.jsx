import React, { Component } from 'react';
import { CartSummary } from 'modules/cart-summary';
import { HeroBuilder } from 'modules/hero-builder';
import { useToggle, PrimaryButton } from 'components';

// #region Cart Setup
const cart = {
  name: 'My Cart',
  products: [
    {
      name: 'Soccer Ball',
      price: 10,
      quantity: 1,
    },
    {
      name: 'Stapler',
      price: 5,
      quantity: 2,
    },
    {
      name: 'Milk',
      price: 2,
      quantity: 1,
    },
    {
      name: 'Juice Box',
      price: 1,
      quantity: 1,
    },
    {
      name: 'Trapper Keeper',
      price: 15,
      quantity: 3,
    },
    {
      name: 'Latest Battle Royale',
      price: 100,
      quantity: 1,
    },
    {
      name: 'Oreos',
      price: 2,
      quantity: 6,
    },
  ],
};
// #endregion Cart Setup
// #region Character Setup

const equipment = [
  {
    name: 'Wizard Hat',
    health: 5,
    level: 1,
  },
  {
    name: 'Silver Chest Piece',
    health: 5,
    armor: 5,
    level: 2,
  },
  {
    name: 'Boots',
    armor: 2,
    level: 6,
  },
  {
    name: 'Glove',
    damage: 3,
    level: 5,
  },
  {
    name: 'Axe',
    damage: 7,
    level: 3,
  },
];
// #endregion Character Setup

const AppDemo = props => {
  const { isOn, toggleState } = useToggle(true);
  return (
    <>
      {isOn ? <CartSummary cart={cart} /> : <HeroBuilder equipment={equipment} />}
      <PrimaryButton onClick={toggleState}>Switch App!</PrimaryButton>
    </>
  );
};

/** Home Page */
class Home extends Component {
  render() {
    return <AppDemo />;
  }
}

export default Home;
