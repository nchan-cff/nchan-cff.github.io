import logo from './logo.svg';
import './App.css';
import {PatientVisualizer} from 'fhir-visualizers';
import React, { useState, useEffect } from 'react';
import Demographics from './components/demographics';
import CFDiagnosis from './components/cfdiagnosis';
import Encounter from './components/encounter';
import FHIR from 'fhirclient';
import {v4 as uuidv4} from 'uuid'

function App(props) {
  const client = props.client;
  const [patient, setPatient] = useState(null);
    
  useEffect(() => {
    client.patient.read().then((patient) => setPatient(patient));
  });

  const getPatientEntry=uuid=>{
    let entry = {
      "fullUrl" : "",
      "resource" : {
        "resourceType" : "Patient",
        "name" : [],
        "gender" : "",
        "birthDate" : ""
      },
      "request" : {
        "method" : "POST",
        "url" : "Patient"
      }
    };

    entry.fullUrl = "urn:uuid:" + uuid;    
    entry.resource.gender = patient.gender;
    entry.resource.birthDate = patient.birthDate;

    entry.resource.name.push(patient.name);
    return entry;
  }

  const getObservation=uuid=>{
    let entry = {
      "resource": {
        "resourceType": "Observation",
        "status": "final",
        "code": {
          "coding": [{
            "system": "http://loinc.org",
            "code": "29463-7",
            "display": "Body Weight"
          }]
        },
        "subject": {},
        "valueQuantity": {}
      },
      "request": {
        "method": "POST",
        "url": "Observation"
      }
    };

    entry.subject = {"reference": "urn:uuid:" + uuid} ;
    entry.valueQuantity = {
      "value": 0,
      "unit": 130,
      "system": "http://unitsofmeasure.org",
      "code": "[lb_av]"
    }

    return entry;
  }

  const getEncounter=()=>{

  }

  const getBundle = ()=>{

    let myuuid = uuidv4();
    console.log("myuuid: " + myuuid);
    let transbundle = {
      "resourceType": "Bundle",
      "type": "transaction",
      "entry": []
    };

    transbundle.entry.push(getPatientEntry(myuuid));
    transbundle.entry.push(getObservation(myuuid));

    return transbundle;
  }
  

  const handleSubmit = ()=>{
    console.log(patient);
    alert('Submit clicked');
  
  }

  const onClicked = ()=>{
    console.log(patient);

    // add a second custom us-core-race to extension
    const race2Extension = {
      url: 'text',
      valueString: 'White',
    };
    patient.extension.push(race2Extension);

    console.log(patient);

    let cffClient = FHIR.client("http://hapi.fhir.org/baseR4/");
    
    cffClient.getFhirVersion().then((v) => {
      console.log("Version: " + v);
    });

    let myBundle = getBundle();
    console.log(myBundle);

    cffClient.request({body: JSON.stringify(myBundle), method:"POST", url:"/", headers:{"Content-Type":"application/json+fhir"}}).then((data) => {
      console.log(data);
    });

    alert('Submit clicked');
  }


  return (    
    <div id="app">
      {patient? <PatientVisualizer patient={patient} /> : <h1>Loading</h1>}
      
      <div className="w-75 mt-3mx-0 mx-sm-auto">
        <form className='mb-5' onSubmit={handleSubmit}>
            {patient? <Demographics patient={patient} /> : <h1>Loading</h1>}

            {patient? <CFDiagnosis patient={patient} /> : <h1>Loading</h1>}

            {patient? <Encounter patient={patient} /> : <h1>Loading</h1> }

            <div className="text-start ms-4 mt-5">
                <button type="button" className="btn btn-primary" onClick={onClicked}>Submit</button>
            </div>
        </form>
      </div>            
    </div>
  );
}

export default App;
