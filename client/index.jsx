import React from 'react';
import ReactDOM from 'react-dom';
import { ajax } from 'jquery';
//import components from widget

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: []
    }
  }


  componentDidMount() {
    console.log('mounted.');
    //need to send GET request to server for set of 8 homes

  }

  render () {
    return (
        //structure of component based on functionality
      <div>this is our Testing Matrix</div>
        //overall test page layout
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
