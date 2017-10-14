import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';

import GenreContainer from './GenreContainer';

class DashboardContainer extends Component {
  render() {
    return(
      <div>
        <h1>sup</h1>
        <GenreContainer/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => {
  bindActionCreators(actions, dispatch);
};

const style = {
  color: 'white',
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

// export default connect(
//   (state) => ({ user: state.user }),
//   (dispatch) => bindActionCreators(actions, dispatch)
// )(DashboardContainer)
