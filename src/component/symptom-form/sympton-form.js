import React from 'react';
import Symptoms from '../symptoms/symptoms';
import * as searchActions from '../../action/search';

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

  constructSymptomString = (event) => {
    const inputFields = document.getElementsByTagName('input');
    const inputLength = inputFields.length;
    for (let i = 0; i < inputLength; i++) {
      if (inputFields[i].type === 'checkbox' && inputFields[i].checked === true) {
        this.state.symptomKeys.push(inputFields[i].value);
        console.log(inputFields[i].value);
      }
    }
    const symptomString = `[${this.state.symptomKeys.toString()}]`;

    return symptomString;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const symptoms = this.constructSymptomString(event);
    const age = document.querySelector('input[name=age]').value;
    const gender = document.querySelector('input[name=gender]').value;
    let mediToken = null;
    const currentDate = new Date();
    const tokenTime = Math.floor(currentDate.getTime() / 1000);
    const expirationTarget = tokenTime + this.props.mediToken.expTime;

    if (this.props.mediToken !== null) {
      if (expirationTarget < Math.floor(new Date().getTime() / 1000)) {
        mediToken = this.props.mediToken.token;
      } else {
        this.props.pRefreshMediToken();
        mediToken = this.props.mediToken.token;
      }
    } else {
      this.props.pGetMediToken();
      mediToken = this.props.mediToken.token;
    }

    const query = `https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=${symptoms}&gender=${gender}&year_of_birth=${age}&token=${mediToken}&language=en-gb`;

    return this.props.pTriggerDiagnosis(query)
      .then((response) => {
        this.state.results = response;
      })
      .catch(console.error(error));
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
  pGetDiagnosis: query => dispatch(searchActions.pSearchSymptoms(query)),
  pGetMediToken: () => dispatch(searchActions.pGetToken()),
  pRefreshMediToken: () => dispatch(searchActions.pRefreshToken()),
});

export default SymptomForm;
