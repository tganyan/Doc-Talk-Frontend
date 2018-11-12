import React from 'react';

const symptomMap = new Map();

symptomMap.set('Abdominal pain', 10);
symptomMap.set('Absence of a pulse', 984);
symptomMap.set('Blood in stool', 190);
symptomMap.set('Chills', 175);
symptomMap.set('Diarrhea', 50);
symptomMap.set('Dizziness', 207);
symptomMap.set('Eye redness', 33);
symptomMap.set('Fever', 11);
symptomMap.set('Hallucination', 976);
symptomMap.set('Joint pain', 27);

class SymptomForm extends React.Component {
  render() {
    return (
      <form>
        <input
          name="gender"
          placeholder="gender"
        />
        <input
          name="age"
          placeholder="age"
        />
        <input
          name="Abdominal pain"
          type="checkbox"
        />
      </form>
    );
  }
}

export default SymptomForm;
