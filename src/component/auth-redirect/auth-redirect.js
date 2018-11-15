import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as routes from '../../routes';

class AuthRedirect extends React.Component {
  render() {
    const { location, token } = this.props;
    const { pathname } = location;
    let destinationRoute = null;
    if (pathname === routes.LOGIN || pathname === routes.SIGNUP
      || pathname === routes.ROOT) {
      if (token && Object.getOwnPropertyNames(token).length !== 0) {
        destinationRoute = routes.DASHBOARD;
      }
    } else if (!token) {
      destinationRoute = routes.ROOT;
    }
    if (pathname === routes.ABOUT_US) {
      destinationRoute = routes.ABOUT_US;
    }
    if (pathname === routes.DIAGNOSIS_LIST) {
      destinationRoute = routes.DIAGNOSIS_LIST;
    }
    if (pathname === routes.DASHBOARD) {
      if (!token || Object.getOwnPropertyNames(token).length === 0) {
        destinationRoute = routes.LOGIN;
      } else {
        destinationRoute = routes.DASHBOARD;
      }
    }

    return (
      <div>
        {destinationRoute ? <Redirect to={destinationRoute}/> : undefined}
      </div>
    );
  }
}

AuthRedirect.propTypes = {
  token: PropTypes.string,
  location: PropTypes.object,
};

const mapStateToProps = state => ({
  token: state.token,
});

export default connect(mapStateToProps)(AuthRedirect);
