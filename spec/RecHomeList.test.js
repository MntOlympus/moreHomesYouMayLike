import React from 'react';
import { shallow, mount } from 'enzyme';

//components
import RecHomeList from '../client/components/RecHomeList.jsx';
import RecHome from '../client/components/RecHome.jsx';

describe('Component: RecHomeList', () => {

  const bestHome = 'example';
  const minProps = [
      {title: bestHome},
      {title: bestHome},
      {title: bestHome},
      {title: bestHome},
      {title: bestHome},
      {title: bestHome},
      {title: bestHome},
      {title: bestHome}
    ]

  // confirm it enters our universe properly!
  it('renders without exploding', () => {
    expect(
      shallow(
        <RecHomeList homesSet={minProps}/>
      ).length
    ).toBe(1);
  })

  it('should render correctly in "debug" mode', () => {
    const wrap = shallow(<RecHomeList homesSet={minProps} debug />);

    expect(wrap).toMatchSnapshot();
  });

  it('should render correctly with props', () => {

    const wrap = shallow(<RecHomeList homesSet={minProps}/>);
    expect(wrap).toMatchSnapshot();
  });

  it('should render banner text correctly with given strings', () => {
    const strings = ['one', 'two'];
    const wrap = shallow(<RecHomeList list={strings} homesSet={minProps}/>);
    expect(wrap).toMatchSnapshot();
  });

  it('should render child components', () => {
    const wrap = mount(<RecHomeList homesSet={minProps}/>);

    expect(wrap.find(RecHome).length).toBe(8);
  });

  //it should scroll through homes (children)
    //it should display three children at a time


});