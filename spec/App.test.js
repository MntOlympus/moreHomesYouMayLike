import React from 'react';
import { shallow } from 'enzyme';

//components
import App from '../client/components/App.jsx';

describe('Component: App', () => {

  // confirm it enters our universe properly!
  it('renders without exploding', () => {
    expect(
      shallow(
        <App />
      ).length
    ).toBe(1);
  })

  //should render RecHomeList

});