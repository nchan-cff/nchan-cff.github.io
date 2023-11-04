import React, { Component } from 'react';
import { oauth2 as SMART } from "fhirclient";

function svcFhirClient(props){

    const submitBundle = (bundle)=>{
        console.log(bundle);
        alert('Submit clicked - Bundle');
      }
}

// class svcFhirClient extends Component {

//         constructor(props) {
//             super(props);    
//         }

//     // function name(params) {
        
//     // } 

//     const submitBundle = (bundle)  => {
//     //     console.log(bundle);
    
//     //     alert('Submit Bundle');      
//     // }
//     }

    
// }

export default svcFhirClient;
