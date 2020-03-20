import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import RecHomeList from './RecHomeList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: null,
      shift: 0
    }
    this.nexthome = this.nexthome.bind(this);
    this.prevhome = this.prevhome.bind(this);
  }

  componentDidMount() {
    //fetches set of eight homes for display in widget
    axios.get('/recommendations')
      .then((results) => {
        this.setState({homes: results.data});
        console.log(this.state.homes);
        // console.log(this.state.home);
      })
      .catch((err) => {
        console.log('something went awry');
      })
    //_______________________________________________
  }

  nexthome() {
    // const newhome = this.state.home.index+1;
    this.setState({
      shift: this.state.shift + 1
    })
  }

  prevhome() {
    // const newhome = this.state.home.index-1;
    this.setState({
      shift: this.state.shift - 1
    })
  }

  render () {

      return (
        <div>
          <h3 className="dock">This is our Testing Matrix</h3>
          <h4 className="dock">Component Dock</h4>
          <i className="fab fa-app-store fa-4x fa-spin icon-wrapper" style={{color: "darkblue"}}/>

          {this.state.homes ? <RecHomeList homesSet={this.state.homes} shift={this.state.shift} nexthome={this.nexthome} prevhome={this.prevhome}/> : <div>...loading</div>}

          <div className="flex-grid-center">
            <div className="fuller-button red">Austin</div>
              <div className="fuller-button blue">Bradley</div>
            <div className="fuller-button purple">GitLord</div>
          </div>
        </div>
      )
  }
}

export default App;