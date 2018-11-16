import React from 'react';
import Symptoms from '../symptoms/symptoms';
import PropTypes from 'prop-types';
import * as searchActions from '../../action/search';
import { connect } from 'react-redux';

import * as routes from '../../routes';

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
    let mediToken = null;
    const currentDate = new Date();
    const currentTimeInSeconds = Math.floor(currentDate.getTime() / 1000);

    return this.props.pGetMediToken()
      .then((returnedMediToken) => {
        mediToken = returnedMediToken;
        const mediTokenExpiration = parseInt(returnedMediToken.payload.expTime);
        console.log('exp time', mediTokenExpiration);
        if (mediTokenExpiration < currentTimeInSeconds) {
          return this.props.pRefreshMediToken()
            .then(() => {
              return this.props.pGetMediToken(event)
                .then((freshMediToken) => {
                  mediToken = freshMediToken;
                  return mediToken;
                })
            })
            .catch((error) => {
              console.error(error);
            })
        }
        else {
          return mediToken;
        }
      })
      .then((finalMediToken) => {
        const query = `https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=${symptoms}&gender=${gender}&year_of_birth=${age}&token=${finalMediToken.payload.token}&format=json&language=en-gb`;

        return this.props.pGetDiagnosis(query)
          .then(() => {
            this.props.history.push(routes.DIAGNOSIS_LIST);
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {

    return (
      <form onSubmit={this.handleSubmit} className='symptomsForm-container'>
        <h2 className='titleOnForm'>Get a Diagnosis</h2>
        <Symptoms/>
        <div className='diagnosisSubmit'>
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
        </div>
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

SymptomForm.propTypes= {
  history: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(SymptomForm);
