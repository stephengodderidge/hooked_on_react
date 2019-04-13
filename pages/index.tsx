import React, { Component } from 'react';
// import { CartSummary } from 'modules/cart-summary';
import { HeroBuilder } from 'modules/hero-builder';

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
  ],
};
// #endregion Cart Setup
// #region Character Setup
const hero = {
  name: 'My Hero',
  equipment: [
    {
      name: 'WizardHat',
      health: 10,
      level: 1,
    },
    {
      name: 'Boots',
      armor: 5,
      level: 6,
    },
    {
      name: 'Glove',
      damage: 3,
      level: 5,
    },
    {
      name: 'Axe',
      damage: 50,
      level: 3,
    },
  ],
};
// #endregion Character Setup

/** Home Page */
class Home extends Component<{}, {}> {
  render() {
    // return <CartSummary cart={cart} />;
    return <HeroBuilder hero={hero} />;
  }
}

export default Home;
