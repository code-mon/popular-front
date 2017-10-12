import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';

class DashboardContainer extends Component {
  render() {
    return <div />;
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => {
  bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

// export default connect(
//   (state) => ({ user: state.user }),
//   (dispatch) => bindActionCreators(actions, dispatch)
// )(DashboardContainer)
