import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import RecHomeList from './RecHomeList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: []
    }
  }

  componentDidMount() {
    //fetches set of eight homes for display in widget
    axios.get('/recommendations')
      .then((results) => {
        this.setState({homes: results.data});
        console.log(this.state.homes);
      })
      .catch((err) => {
        console.log(err);
      })
    //_______________________________________________
  }

  render () {
    return (
        //structure of component based on functionality
      <div>
      <h3>This is our Testing Matrix</h3>
      <h4>Component Dock</h4>
      <RecHomeList />


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