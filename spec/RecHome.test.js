import React from 'react';
import { shallow } from 'enzyme';

//components
import RecHome from '../client/components/RecHome.jsx';

describe('Component: RecHome', () => {

  // confirm it enters our universe properly!
  it('renders without exploding', () => {
    expect(
      shallow(
        <RecHome />
      ).length
    ).toBe(1);
  })

    //further tests

});