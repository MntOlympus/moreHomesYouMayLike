import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios').default;
//import components from widget

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: []
    }
  }

  componentDidMount() {

    //need to send GET request to server for set of 8 homes...implement logic here or server side
    //_______________________________________________
    axios.get('/recommendations')
      .then((data) => {
        this.setState({homes: data});
        console.log(this.state.homes.data.title);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render () {
    return (
        //structure of component based on functionality
      <div>
      <h1>This is our Testing Matrix</h1>
      <div>Component Dock</div>
        <div className="flex-grid-center">
          <div className="fuller-button red">Austin</div>
          <div className="fuller-button blue">Bradley</div>
          <div className="fuller-button purple">GitLord</div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
