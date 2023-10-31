import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import FHIR from 'fhirclient'

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const root = createRoot(document.getElementById('root'));

const smartLaunch = () => {

  FHIR.oauth2
    .init({
      clientId: '20560ea5-f224-4658-b667-4e6bab935c85',
      scope: 'launch/encounter launch/patient openid profile'
    })
    .then(client => {
      console.log(client);
      //ReactDOM.render(<App client={client} />, rootElement);
      root.render(
  <React.StrictMode>
    <App client={client} />
  </React.StrictMode>
);
    });
};

smartLaunch();