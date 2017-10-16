import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GenresContainer from './genres/GenresContainer';
import MoviesContainer from './movies/MoviesContainer';

class DashboardContainer extends Component {

  render() {
    return(
      <div>
        <GenresContainer />
      </div>
    )
  }
}
export default DashboardContainer;

// export default connect(
//   (state) => ({ user: state.user }),
//   (dispatch) => bindActionCreators(actions, dispatch)
// )(DashboardContainer)
