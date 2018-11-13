import React from 'react';
import Symptoms from '../symptoms/symptoms';
import searchActions from '../../action/search';

class SymptomForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.symptomKeys = [];
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({[name]: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const query = ``;
    return this.props.pTriggerDiagnosis(query)
      .then(() => {

      })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Get a Diagnosis</h2>
        <input
          name="gender"
          placeholder="gender"
          onChange={this.handleChange}
        />
        <input
          name="age"
          placeholder="age"
          onChange={this.handleChange}
        />
        <h3>Possible Symptoms</h3>
        <Symptoms/>
        <button type='submit'>Get your diagnosis</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  pTriggerDiagnosis: query => dispatch(searchActions.searchSymptoms(query)),
});

export default SymptomForm;
