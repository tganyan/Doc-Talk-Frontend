import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SymptomsForm from '../symptom-form/sympton-form';

import '../landing/landing.scss';
import './dashboard.scss';

import DiagnosisList from '../diagnoses-list/diagnosis-list';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.blue = null;
  }

  render() {
    console.log(this.props);
    return (
      <section>

        <p className='title'>Hello! You are logged in</p>
        {/* <SymptomsForm/> */}
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
