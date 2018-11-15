import React from 'react';
import PropTypes from 'prop-types';
import SymptomsForm from '../symptom-form/sympton-form';

import '../landing/landing.scss';
import './dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <p className='title'>Hello! You are logged in</p>
        <SymptomsForm
          history={this.props.history}
        />
      </section>

    );
  }
}

Dashboard.propTypes = {
  history: PropTypes.object,
};

export default Dashboard;
