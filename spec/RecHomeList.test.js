import React from 'react';
import { shallow } from 'enzyme';

//components
import RecHomeList from '../client/components/RecHomeList.jsx';

describe('Component: RecHomeList', () => {

  // confirm it enters our universe properly!
  it('renders without exploding', () => {
    expect(
      shallow(
        <RecHomeList />
      ).length
    ).toBe(1);
  })

    //further tests

});