import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SymptomsForm from '../symptom-form/sympton-form';
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
        <Link to='/'><h2>DocTalk</h2></Link>
        <p>Hello! You are logged in</p>
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
