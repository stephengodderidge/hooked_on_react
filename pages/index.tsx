import React, { Component } from 'react';
import {
  CartComponent,
  CharacterComponent,
} from 'components/hooks/use-calculate-totals';

/** Home Page */
class Home extends Component<{}, {}> {
  render() {
    return (
      <div>
        <CartComponent />
        <CharacterComponent />
      </div>
    );
  }
}

export default Home;
