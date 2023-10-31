import logo from './logo.svg';
import './App.css';
import {PatientVisualizer} from 'fhir-visualizers';
import React, { useState, useEffect } from 'react';
import Demographics from './components/demographics';
import CFDiagnosis from './components/cfdiagnosis';
import Encounter from './components/encounter';

function App(props) {
  const client = props.client;
  const [patient, setPatient] = useState(null);
    
  useEffect(() => {
    client.patient.read().then((patient) => setPatient(patient));
  });

  // client.patient.request("Observation").then(
  //   (obs) => { console.log(obs) }
  // );

  return (    
    <div id="app">
      {patient? <PatientVisualizer patient={patient} /> : <h1>Loading</h1>}
      
      <div className="w-75 mt-3mx-0 mx-sm-auto">
        <form className='mb-5' action="">
            {patient? <Demographics patient={patient} /> : <h1>Loading</h1>}

            {patient? <CFDiagnosis patient={patient} /> : <h1>Loading</h1>}

            {patient? <Encounter patient={patient} /> : <h1>Loading</h1> }

            <div className="text-start ms-4 mt-5">
                <button type="button" className="btn btn-primary">Submit</button>
            </div>
        </form>
      </div>            
    </div>
  );
}

export default App;
