import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Diagnosis from '../diagnosis/diagnosis';

class DiagnosisList extends React.Component {
  render() {
    return (
      <section>
        <h3>Possible Diagnosis ranked in order of likelihood</h3>
        {/* {this.props.diagnosisResults.map((currentDiagnosis, i) => <Diagnosis */}
        {this.props.diagnosisResults.map((currentDiagnosis, i) => <Diagnosis
          currentDiagnosis={currentDiagnosis}
          key={i}
        />)}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    diagnosisResults: state,
  };
};

DiagnosisList.propTypes = {
  diagnosisResults: PropTypes.array,
};

export default connect(mapStateToProps)(DiagnosisList);
