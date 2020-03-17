import React from 'react';
import ReactDOM from 'react-dom';
// import RecHome from './RecHome.jsx';
// import FavoritePop from './FavoritePop.jsx';
import axios from 'axios';
//import components from widget

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: []
    }
  }

  componentDidMount() {

    //fetches set of eight homes for display in widget
    //_______________________________________________
    axios.get('/recommendations')
      .then((results) => {
        this.setState({homes: results.data});
        console.log(this.state.homes);
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
      <div>Component Dock


      </div>
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