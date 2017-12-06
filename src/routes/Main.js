import React, { Component } from 'react';
import {connect} from 'react-redux';
import {LOADED} from '../actions/contants';
import {fetchCounter} from '../actions/counter';
import {action} from '../actions/actionHelper';
import {getCounter} from '../reducers/counter';

class Main extends Component {
  componentDidMount() {
    this.props.loadCounter();
  }

  render() {
    const { counter } = this.props;
    return (
      <div>
        { counter }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: getCounter(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCounter: () => dispatch(action(LOADED, { loaded: fetchCounter })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
