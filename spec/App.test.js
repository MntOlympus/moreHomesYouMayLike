import React from 'react';
import { shallow, mount } from 'enzyme';

//components
import App from '../client/components/App.jsx';
import RecHomeList from '../client/components/RecHomeList.jsx'

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
    const wrap = shallow(<App />);
    wrap.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('should render correctly in "debug" mode', () => {
    const wrap = shallow(<App debug />);
    expect(wrap).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const wrap = shallow(<App/>);
    expect(wrap).toMatchSnapshot();
  });

  it('should render banner text correctly with given strings', () => {
    const strings = ['one', 'two'];
    const wrap = shallow(<App list={strings} />);
    expect(wrap).toMatchSnapshot();
  });

  it('should be able to set state', () => {
    const wrap = shallow(<App/>);
    wrap.setState({ homes: [{title: 'bestHome'}] })
    expect(wrap.state('homes')).toEqual([{title: 'bestHome'}])
  });

  it('should render child component', () => {
    const wrap = mount(<App/>);

    //_________________________________________________
    //needed because of conditional rendering ternary
    wrap.setState({ homes: [{title: 'bestHome'}] });
    //_________________________________________________

    expect(wrap.find(RecHomeList).length).toBe(1);
  });

  it('should have placeholders for teammate widgets', () => {
    const wrap = mount(<App/>);
    expect(
      wrap.containsAllMatchingElements([
        <div className="fuller-button red">Austin</div>,
        <div className="fuller-button blue">Bradley</div>,
        <div className="fuller-button purple">GitLord</div>
      ]
      )
    ).toBeTruthy()
  })

  //UNCOVERED______________________

  //set states asynchronously on mount

});
