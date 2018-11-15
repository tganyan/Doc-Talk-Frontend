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
      if (token) {
        destinationRoute = routes.DASHBOARD;
      }
    } else if (!token) {
      destinationRoute = routes.ROOT;
    }
    if (pathname === routes.ABOUT_US) {
      destinationRoute = routes.ABOUT_US;
    }
    if (pathname === routes.DIAGOSIS_LIST) {
      destinationRoute = routes.DIAGOSIS_LIST;
    }

    console.log('DESTINATION_ROUTE', destinationRoute);

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
