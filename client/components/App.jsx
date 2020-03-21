import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from '../stylesheets/App.module.css';

import RecHomeList from './RecHomeList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: null,
      shift: 0,
      image: 0
    }
    this.nexthome = this.nexthome.bind(this);
    this.prevhome = this.prevhome.bind(this);
    this.imageForward = this.imageForward.bind(this);
    this.imageBackward = this.imageBackward.bind(this);
  }

  componentDidMount() {
    //fetches set of eight homes for display in widget
    axios.get('/recommendations')
      .then((results) => {
        this.setState({homes: results.data});
        console.log('data set: ', this.state.homes);
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

  imageForward() {
    this.setState({
      image: this.state.image + 1
    })
  }

  imageBackward() {
    this.setState({
      image: this.state.image - 1
    })
  }

  render () {

      return (
        <div>

          {this.state.homes ? <RecHomeList homesSet={this.state.homes} shift={this.state.shift} image={this.state.image} nexthome={this.nexthome} prevhome={this.prevhome} imageForward={this.imageForward} imageBackward={this.imageBackward}/> : <div>...loading</div>}

        </div>
      )
  }
}

export default App;