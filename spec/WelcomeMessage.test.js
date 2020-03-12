import React from 'react';
import { shallow } from ‘enzyme’;

// Components
import WelcomeMessage from './WelcomeMessage';

function setup() {
  const props = {
    imgPath: 'https://www.geek.com/wp-content/uploads/2018/08/Cyberpunk-2077-concept-art-625x352.jpg',
  };
  const wrapper = shallow(<WelcomeMessage />);
  return { wrapper, props };
}

describe('WelcomeMessage Test Suite', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img').exists()).toBe(true);
  });
});
