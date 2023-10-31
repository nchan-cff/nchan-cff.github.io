import React, { Component, useState } from 'react';
import '../App.css';

class Encounter extends Component {

    constructor(props) {
        super(props)

        //console.log(this.props.patient);
    }

    render() {
        return (
            <div className="px-4 mb-5">
                <div className="card-header bg-primary">
                    <h5 className="card-title text-white mt-2" id="exampleModalLabel">Encounter</h5>
                </div>
                <div className="modal-body mt-3 row">
                    <div className='col-md-6'>
                        <label className="form-label">Height:</label>
                        <div className='row'>
                            <div class="col-auto">
                                <input type="text" class="form-control" id="txtHeight" />
                            </div>
                            <div class="col-auto">
                                <input className="form-check-input me-1 align-middle" type="radio" name="radioHeigh" id="radioHeighCm" />
                                <label className="form-check-label me-3 align-middle" htmlFor="radioHeighCm">cm</label>
                                <input className="form-check-input me-1 align-middle" type="radio" name="radioHeigh" id="radioHeighInch" />
                                <label className="form-check-label me-3 align-middle" htmlFor="radioHeighInch">inches</label>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <label className="form-label">Height Percentile:</label>
                        <div className='row'>
                            <div class="col-auto">
                                <input type="text" class="form-control" id="txtHeightPerc" />
                            </div>
                            <div class="col-auto">
                                <label className="form-check-label" htmlFor="txtHeightPerc">%</label>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 mt-3'>
                        <label className="form-label">Weight:</label>
                        <div className='row'>
                            <div class="col-auto">
                                <input type="text" class="form-control" id="txtWeight" />
                            </div>
                            <div class="col-auto">
                                <input className="form-check-input me-1 align-middle" type="radio" name="radioWeight" id="radioWeightKg" />
                                <label className="form-check-label me-3 align-middle" htmlFor="radioWeightKg">kg</label>
                                <input className="form-check-input me-1 align-middle" type="radio" name="radioWeight" id="radioWeightLb" />
                                <label className="form-check-label me-3 align-middle" htmlFor="radioWeightLb">lb</label>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mt-3'>
                        <label className="form-label">Weight Percentile:</label>
                        <div className='row'>
                            <div class="col-auto">
                                <input type="text" class="form-control" id="txtWeightPerc" />
                            </div>
                            <div class="col-auto">
                                <label className="form-check-label" htmlFor="txtWeightPerc">%</label>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 mt-3'>
                        <label className="form-label">BMI Value:</label>
                        <div className='row'>
                            <div class="col-auto">
                                <input type="text" class="form-control" id="txtBMI" />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mt-3'>
                        <label className="form-label">BMI Percentile:</label>
                        <div className='row'>
                            <div class="col-auto">
                                <input type="text" class="form-control" id="txtBMIPerc" />
                            </div>
                            <div class="col-auto">
                                <label className="form-check-label">%</label>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mt-3'>
                        <label className="form-label">Weight-for-Length Percentile:</label>
                        <div className='row'>
                            <div class="col-auto">
                                <input type="text" class="form-control" id="txtWeighLengthtPerc" />
                            </div>
                            <div class="col-auto">
                                <label className="form-check-label">%</label>
                            </div>
                        </div>
                    </div>
                </div>

                <fieldset>
                    <legend className='mt-4'><h5>Exacerbation Assessment</h5></legend>
                    <div className="modal-body mt-3 row">

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Were there crackles (rales) on physical exam at this visit?</label>
                            <div>
                                <input className="form-check-input me-1" type="radio" name="cracklesExamVisit" id="cracklesExamVisitYes" />
                                <label className="form-check-label me-3" htmlFor="diagnosedFalseNegativeYes">Yes</label>
                                <input className="form-check-input me-1" type="radio" name="cracklesExamVisit" id="cracklesExamVisitNo" />
                                <label className="form-check-label me-3" htmlFor="diagnosedFalseNegativeNo">No</label>
                                <input className="form-check-input me-1" type="radio" name="cracklesExamVisit" id="cracklesExamVisitNotAvailable" />
                                <label className="form-check-label me-3" htmlFor="diagnosedFalseNegativeUnk">Physical exam data not available</label>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">What was your assessment regarding pulmonary exacerbation at this visit?</label>
                            <div>
                                <input className="form-check-input me-1" type="radio" name="pulmonaryExacerbationExamVisit" id="pulmonaryExacerbationAbsent" />
                                <label className="form-check-label me-3" htmlFor="pulmonaryExacerbationAbsent">Absent</label>
                                <input className="form-check-input me-1" type="radio" name="pulmonaryExacerbationExamVisit" id="pulmonaryExacerbationMild" />
                                <label className="form-check-label me-3" htmlFor="pulmonaryExacerbationMild">Mild</label>
                                <input className="form-check-input me-1" type="radio" name="pulmonaryExacerbationExamVisit" id="pulmonaryExacerbationModerate" />
                                <label className="form-check-label me-3" htmlFor="pulmonaryExacerbationModerate">Moderate</label>
                                <input className="form-check-input me-1" type="radio" name="pulmonaryExacerbationExamVisit" id="pulmonaryExacerbationSevere" />
                                <label className="form-check-label me-3" htmlFor="pulmonaryExacerbationSevere">Severe</label>
                                <input className="form-check-input me-1" type="radio" name="pulmonaryExacerbationExamVisit" id="pulmonaryExacerbationUnableAnswer" />
                                <label className="form-check-label me-3" htmlFor="pulmonaryExacerbationUnableAnswer">Don't know/unable to answer</label>
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Was a follow up visit scheduled?</label>
                            <div>
                                <input className="form-check-input me-1" type="radio" name="followUpScheduled" id="followUpScheduledYes" />
                                <label className="form-check-label me-3" htmlFor="diagnosedFalseNegativeYes">Yes</label>
                                <input className="form-check-input me-1" type="radio" name="followUpScheduled" id="followUpScheduledNo" />
                                <label className="form-check-label me-3" htmlFor="diagnosedFalseNegativeNo">No</label>
                                <input className="form-check-input me-1" type="radio" name="followUpScheduled" id="followUpScheduledUnknown" />
                                <label className="form-check-label me-3" htmlFor="diagnosedFalseNegativeUnk">Unknown</label>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">If Yes, indicate when:</label>
                            <div>
                                <input type="text" className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-12 mb-1">
                            <label className="form-label">If you determined that an exacerbation was present, please select the treatment course prescribed to treat the exacerbation:</label>

                        </div>
                        <div className="col-md-6 mb-3">
                            <div>
                                <input type="checkbox" className="form-check-input me-1" value="" id="chkExacerbate1" />
                                <label className="form-check-label me-3" htmlFor="chkExacerbate1">Increased airway clearance, exercise, and/or bronchodilators</label>
                                <br />
                                <input type="checkbox" className="form-check-input me-1" value="" id="chkExacerbate1" />
                                <label className="form-check-label me-3" htmlFor="chkExacerbate1">Oral quinolone antibiotic (e.g. ciprofloxacin (Cipro), levofloxacin)</label>
                                <br />
                                <input type="checkbox" className="form-check-input me-1" value="" id="chkExacerbate1" />
                                <label className="form-check-label me-3" htmlFor="chkExacerbate1">Inhaled antibiotic PLUS Oral NON-quinolone antibiotic</label>
                                <br />
                                <input type="checkbox" className="form-check-input me-1" value="" id="chkExacerbate1" />
                                <label className="form-check-label me-3" htmlFor="chkExacerbate1">None of the above</label>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div>
                                
                                <input type="checkbox" className="form-check-input me-1" value="" id="chkExacerbate1" />
                                <label className="form-check-label me-3" htmlFor="chkExacerbate1">Oral NON-quinolone antibiotic (e.g. azithromycin, Bactrim, Augmentin, etc)</label>
                                <br />
                                <input type="checkbox" className="form-check-input me-1" value="" id="chkExacerbate1" />
                                <label className="form-check-label me-3" htmlFor="chkExacerbate1">Inhaled antibiotic</label>
                                <br />
                                <input type="checkbox" className="form-check-input me-1" value="" id="chkExacerbate1" />
                                <label className="form-check-label me-3" htmlFor="chkExacerbate1">Inhaled antibiotic PLUS an oral quinolone antibiotic</label>
                                <br />
                                <label className="form-label">If None of the above then specify:</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        );
    }
}

export default Encounter;