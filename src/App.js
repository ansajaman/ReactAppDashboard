import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import routes from './routes';
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const {history} = this.props;
    return (
      <Router history={history}>
        {routes}
      </Router>
    );
  }
}

export default App;
