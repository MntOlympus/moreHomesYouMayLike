import React from 'react';
import { shallow } from 'enzyme';

//components
import FavoritePop from '../client/components/FavoritePop.jsx';

describe('Component: FavoritePop', () => {

  // confirm it enters our universe properly!
  it('renders without exploding', () => {
    expect(
      shallow(
        <FavoritePop />
      ).length
    ).toBe(1);
  })

    //further tests

});