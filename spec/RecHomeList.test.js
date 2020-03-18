import React from 'react';
import { shallow, mount } from 'enzyme';

//components
import RecHomeList from '../client/components/RecHomeList.jsx';
import RecHome from '../client/components/RecHome.jsx';

describe('Component: RecHomeList', () => {

  const minProps = {
    homes: []
  }

  // confirm it enters our universe properly!
  it('renders without exploding', () => {
    expect(
      shallow(
        <RecHomeList homes={minProps}/>
      ).length
    ).toBe(1);
  })

  it('should render correctly in "debug" mode', () => {
    const wrap = shallow(<RecHomeList debug />);

    expect(wrap).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const wrap = shallow(<RecHomeList/>);

    expect(wrap).toMatchSnapshot();
  });

  it('should render correctly with props', () => {

    const wrap = shallow(<RecHomeList homes={minProps}/>);
    expect(wrap).toMatchSnapshot();
  });

  it('should render banner text correctly with given strings', () => {
    const strings = ['one', 'two'];
    const wrap = shallow(<RecHomeList list={strings} />);
    expect(wrap).toMatchSnapshot();
  });

  it('should render child components', () => {
    const wrap = mount(<RecHomeList/>);

    expect(wrap.find(RecHome).length).toBe(8);
  });

  //it should scroll through homes (children)


});