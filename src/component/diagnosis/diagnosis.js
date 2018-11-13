import React from 'react';
import PropTypes from 'prop-types';

import Specialist from '../specialist/specialist';

class Diagnosis extends React.Component {
  render() {
    return (
      <div>
        <h3>Diagnosis: {this.props.currentDiagnosis.Issue.Name}</h3>
        <p>Accuracy of symptoms: <strong>{this.props.currentDiagnosis.Issue.Accuracy}%</strong></p>
        <p>Recommended medical specialists: {this.props.currentDiagnosis.Specialisation
          .map((currentSpecialist, i) => <Specialist
            currentSpecialist={currentSpecialist}
            key={i}
          />)}
        </p>
      </div>
    );
  }
}

Diagnosis.propTypes = {
  currentDiagnosis: PropTypes.object,
};

export default Diagnosis;
