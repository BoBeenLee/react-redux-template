import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
        <Provider store={ configureStore() }>
          <Main />
        </Provider>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;