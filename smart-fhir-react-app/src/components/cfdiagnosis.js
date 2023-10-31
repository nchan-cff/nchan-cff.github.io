import React, { Component, useState } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CFDiagnosis extends Component {

    constructor(props) {
        super(props)

        this.state = {
            startDate: new Date()
        };

        //console.log(this.props.patient);
    }

    setStartDate(date) {
        //console.log(date);
        this.startDate = date;
    }

    render() {
        return (
            <div className="px-4 mb-5">
                <div className="card-header bg-primary">
                    <h5 className="card-title text-white mt-2" id="exampleModalLabel">CF Diagnosis</h5>
                </div>
                <fieldset>
                    <legend className='mt-3'><h5>History of patient diagnosis</h5></legend>
                    <div className="modal-body mt-3 row">

                        <div className="col-md-6 mb-3">
                            <label className="form-label" htmlFor="diagnosisDateApprox">Date is an approximation:</label>
                            <input type="checkbox" className="form-check-input ms-2" value="" id="diagnosisDateApprox" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Date of diagnosis (may be earlier than first sweat test):</label>
                            <DatePicker className='ms-2' selected={this.startDate} onChange={(date) => this.setStartDate(date)} />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Diagnosis:</label>
                            <select className='form-select' defaultValue={"0"} size='1' >
                                <option value="0">Open this select menu</option>
                                <option value="1">Cystic Fibrosis</option>
                                <option value="2">Related Metabolic Syndrome</option>
                                <option value="3">CFTR-Related Disorde</option>
                                <option value="4">CF, CRMS and CFTR-Related Disorder All Ruled Out</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Patient was diagnosed with CF after false negative result by newborn screening:</label>
                            <div>
                                <input className="form-check-input me-1" type="radio" name="diagnosedFalseNegative" id="diagnosedFalseNegativeYes" />
                                <label className="form-check-label me-3" htmlFor="diagnosedFalseNegativeYes">Yes</label>
                                <input className="form-check-input me-1" type="radio" name="diagnosedFalseNegative" id="diagnosedFalseNegativeNo" />
                                <label className="form-check-label me-3" htmlFor="diagnosedFalseNegativeNo">No</label>
                                <input className="form-check-input me-1" type="radio" name="diagnosedFalseNegative" id="diagnosedFalseNegativeUnk" />
                                <label className="form-check-label me-3" htmlFor="diagnosedFalseNegativeUnk">Unknown</label>
                            </div>
                        </div>

                        <div className='col-md-12 mb-3 mt-3'>
                            <label className="form-label">Diagnosis suggested by the following:</label>

                            <div className='row'>
                                <div className='col-md-4'>
                                    <input type="checkbox" className="form-check-input" value="" id="acuteOrPersistRespAbnorm" />
                                    <label className="form-label ms-2" htmlFor="acuteOrPersistRespAbnorm">Acute or persistent respiratory abnormalities</label>
                                </div>
                                <div className='col-md-4'>
                                    <input type="checkbox" className="form-check-input" value="" id="chkCBAVD" />
                                    <label className="form-label ms-2" htmlFor="chkCBAVD">CBAVD (absent vas deferens) or related abnormalities</label>
                                </div>
                                <div className='col-md-4'>
                                    <input type="checkbox" className="form-check-input" value="" id="chkDigitalClubbing" />
                                    <label className="form-label ms-2" htmlFor="chkDigitalClubbing">Digital clubbing</label>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-4'>
                                    <input type="checkbox" className="form-check-input" value="" id="chkDnaAnalysis" />
                                    <label className="form-label ms-2" htmlFor="chkDnaAnalysis">DNA Analysis</label>
                                </div>
                                <div className='col-md-4'>
                                    <input type="checkbox" className="form-check-input" value="" id="chkEdema" />
                                    <label className="form-label ms-2" htmlFor="chkEdema">Edema</label>
                                </div>
                                <div className='col-md-4'>
                                    <input type="checkbox" className="form-check-input" value="" id="chkElectrolyteImbalance" />
                                    <label className="form-label ms-2" htmlFor="chkElectrolyteImbalance">Electrolyte imbalance</label>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-4'>
                                    <input type="checkbox" className="form-check-input" value="" id="chkElevIrtCFNewbornScreening" title="Elevated Immunoreactive Trypsinogen (IRT) at CF Newborn Screening" />
                                    <label className="form-label ms-2" htmlFor="chkElevIrtCFNewbornScreening" title="Elevated Immunoreactive Trypsinogen (IRT) at CF Newborn Screening">Elevated IRT at CF Newborn Screening</label>
                                </div>
                                <div className='col-md-4'>
                                    <input type="checkbox" className="form-check-input" value="" id="chkFailureThriveMalnutrition" />
                                    <label className="form-label ms-2" htmlFor="chkFailureThriveMalnutrition">Failure to thrive/malnutrition</label>
                                </div>
                                <div className='col-md-4'>
                                    <input type="checkbox" className="form-check-input" value="" id="chkFamilyHistory" />
                                    <label className="form-label ms-2" htmlFor="chkFamilyHistory">Family history</label>
                                </div>
                            </div>

                        </div>

                    </div>
                </fieldset>
            </div>
        );
    }
}

export default CFDiagnosis;