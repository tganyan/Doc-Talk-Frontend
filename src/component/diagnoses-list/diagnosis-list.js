import React from 'react';
import { connect } from 'react-redux';

class Diagnosis extends React.Component {
  render() {
    return (

      <div>
        RESULTS
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    diagnosisResults: state,
  }
};

export default connect(mapStateToProps)(Diagnosis);
