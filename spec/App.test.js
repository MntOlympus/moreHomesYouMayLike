import React from 'react';
import { shallow, mount } from 'enzyme';

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

  it('should execute `componentDidMount()`', () => {
    const spy = jest.spyOn(App.prototype, 'componentDidMount');

    const wrapper = shallow(<App />);
    wrapper.instance().componentDidMount();

    expect(spy).toHaveBeenCalled();
  });

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const component = shallow(<App/>);

    expect(component).toMatchSnapshot();
  });

  it('should render banner text correctly with given strings', () => {
    const strings = ['one', 'two'];
    const component = shallow(<App list={strings} />);
    expect(component).toMatchSnapshot();
  });

  //should render RecHomeList

});