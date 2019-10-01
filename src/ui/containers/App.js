import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

// UI
import './App.css';

// Engine
import { uiActions } from '../../engine/core/ui/actions';
import { selectors } from '../../engine/config/selectors';

function App(props) {
  window.console.log(props);
  const { loading, loadingStatus } = props;

  return (
    <div>
      <button onClick={() => (loading(!loadingStatus))} type="button">Click me</button>
      ! - {loadingStatus.toString()} - !
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loadingStatus: selectors.ui.isLoading(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loading: (status) => dispatch(uiActions.loading(status)),
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(App);
