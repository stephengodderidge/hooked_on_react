import React, { Component } from 'react';
import { CartSummary } from 'modules/cart-summary';

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
const character = {
  name: 'My Character',
  equipment: [
    {
      name: 'Helmet',
      armor: 10,
      health: 10,
      level: 1,
    },
    {
      name: 'Sword',
      damage: 5,
      level: 3,
    },
    {
      name: 'Lucky Charm',
      health: 5,
      level: 5,
    },
    {
      name: 'Unlucky Charm',
      health: -1,
      level: 3,
    },
  ],
};
// #endregion Character Setup

/** Home Page */
class Home extends Component<{}, {}> {
  render() {
    return <CartSummary cart={cart} />;
  }
}

export default Home;
