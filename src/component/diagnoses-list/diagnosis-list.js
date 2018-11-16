import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Diagnosis from '../diagnosis/diagnosis';

import './diagnosis-list.scss';

class DiagnosisList extends React.Component {
  render() {
    return (
      <section className='resultsSection'>
        <h2 className='spacing-lg-bot'>Possible Diagnosis ranked in order of likelihood</h2>
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
    diagnosisResults: state.search,
  };
};

DiagnosisList.propTypes = {
  diagnosisResults: PropTypes.array,
};

export default connect(mapStateToProps)(DiagnosisList);
