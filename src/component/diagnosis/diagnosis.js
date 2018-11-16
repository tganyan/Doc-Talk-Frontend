import React from 'react';
import PropTypes from 'prop-types';

import Specialist from '../specialist/specialist';

import './diagnosis.scss';

class Diagnosis extends React.Component {
  render() {
    return (
      <div className='resultItem'>
        <h3>Diagnosis: <span className='resultHighLight'>{this.props.currentDiagnosis.Issue.Name}</span></h3>
        <p>Accuracy of diagnosis: <strong>{this.props.currentDiagnosis.Issue.Accuracy}%</strong></p>
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
