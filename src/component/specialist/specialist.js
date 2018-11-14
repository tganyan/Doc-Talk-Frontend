import React from 'react';
import PropTypes from 'prop-types';

class Specialist extends React.Component {
  render() {
    return (
      <li><strong>{this.props.currentSpecialist.Name}</strong></li>
    );
  }
}

Specialist.propTypes = {
  currentSpecialist: PropTypes.object,
};

export default Specialist;
