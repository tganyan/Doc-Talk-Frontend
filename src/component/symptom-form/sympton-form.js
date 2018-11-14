import React from 'react';
import Symptoms from '../symptoms/symptoms';
import * as searchActions from '../../action/search';
import { connect } from 'react-redux';
import '../symptom-form/symptom-form.scss';

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

  constructSymptomString = () => {
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
    const symptoms = this.constructSymptomString();
    const age = document.querySelector('input[name=age]').value;
    const gender = document.querySelector('input[name=gender]').value;
    // let mediToken = null;
    // const currentDate = new Date();
    // const tokenTime = Math.floor(currentDate.getTime() / 1000);
    // const expirationTarget = tokenTime + this.props.mediToken.expTime;
    //
    // if (this.props.mediToken !== null) {
    //   if (expirationTarget < Math.floor(new Date().getTime() / 1000)) {
    //     mediToken = this.props.mediToken.token;
    //   } else {
    //     this.props.pRefreshMediToken();
    //     mediToken = this.props.mediToken.token;
    //   }
    // } else {
    //   this.props.pGetMediToken();
    //   mediToken = this.props.mediToken.token;
    // }

    const query = `https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=${symptoms}&gender=${gender}&year_of_birth=${age}&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imphc29uaGlAY3JhenlyZWRoZWFkLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiNDIyMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAxOC0xMS0xMSIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNTQyMTU3Nzg1LCJuYmYiOjE1NDIxNTA1ODV9.ioCSwKmOqjjiA6qaFeHp2CaKa6rwUEVPYB278_FqvL8&format=json&language=en-gb`;

    return this.props.pGetDiagnosis(query)
      .then((response) => {
        console.log(this.props.mediToken);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <h2 className='titleOnForm'>Get a Diagnosis</h2>
         {/*<h4>Possible Symptoms</h4>*/}
        <Symptoms/>
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
        <button className='buttonStyle' type='submit'>Get your diagnosis</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  pGetDiagnosis: query => dispatch(searchActions.pSearchSymptoms(query)),
  pGetMediToken: () => dispatch(searchActions.pGetToken()),
  pRefreshMediToken: () => dispatch(searchActions.pRefreshToken()),
});

const mapStateToProps = state => ({
  mediToken: state,
});
export default connect(mapStateToProps, mapDispatchToProps)(SymptomForm);
