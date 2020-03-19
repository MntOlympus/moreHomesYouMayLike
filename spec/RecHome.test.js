import React from 'react';
import { shallow, mount } from 'enzyme';

//components
import RecHome from '../client/components/RecHome.jsx';
import FavoritePop from "../client/components/FavoritePop.jsx"

describe('Component: RecHome', () => {

  const minProps = {
    title: 'bestHome'
  }

  // confirm it enters our universe properly!
  it('renders without exploding', () => {
    expect(
      shallow(
        <RecHome />
      ).length
    ).toBe(1);
  });

  it('should render correctly in "debug" mode', () => {
    const wrap = shallow(<RecHome debug />);

    expect(wrap).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const wrap = shallow(<RecHome/>);

    expect(wrap).toMatchSnapshot();
  });

  it('should render correctly with props', () => {

    const wrap = shallow(<RecHome homes={minProps}/>);
    expect(wrap).toMatchSnapshot();
  });

  it('should render banner text correctly with given strings', () => {
    const strings = ['one', 'two'];
    const wrap = shallow(<RecHome list={strings} />);
    expect(wrap).toMatchSnapshot();
  });

  //it should have six images
    //it should scroll through images

  //it should have a favorites pop-up window
  it('should render favorites button', () => {
    const wrap = mount(<RecHome/>);

    expect(wrap.find(FavoritePop).length).toBe(1);
  });


});