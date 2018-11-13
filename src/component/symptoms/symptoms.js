import React from 'react';

const symptomsArray = [
  {
    name: 'Abdominal pain',
    id: 10,
  },
  {
    name: 'Absence of a pulse',
    id: 984,
  },
  {
    name: 'Blood in stool',
    id: 190,
  },
  {
    name: 'Chills',
    id: 175,
  },
  {
    name: 'Diarrhea',
    id: 50,
  },
  {
    name: 'Dizziness',
    id: 207,
  },
  {
    name: 'Eye redness',
    id: 33,
  },
  {
    name: 'Fever',
    id: 11,
  },
  {
    name: 'Hallucination',
    id: 976,
  },
  {
    name: 'Joint pain',
    id: 27,
  },
];

class SymptomsList extends React.Component {
  render() {
    return (
      <ul>
        { symptomsArray.map(currentSymptom => <li key={currentSymptom.id}>
              <label htmlFor={currentSymptom.name}>{currentSymptom.name}</label>
              <input
                name={currentSymptom.name}
                type="checkbox"
                value={currentSymptom.id}
              />
            </li>)}
      </ul>
    );
  }
}

export default SymptomsList;
