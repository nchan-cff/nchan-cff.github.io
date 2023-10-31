import React, { Component } from 'react';
import '../App.css';

class Demographics extends Component {

    constructor(props) {
        super(props);

        //this.client = props.client;
        //console.log(this.props.patient);
    }

    //#region private methods

    getRace(extension) {
        let race = 'Unknown';

        for (let ext of extension) {
            if (ext.url.includes('us-core-race')) {
                race = ext.extension[0].valueCoding.display;
                break;
            }
        }

        return race;
    }

    getHispanic(extension) {
        let isHispanic = 'unknown';

        for (let ext of extension) {
            if (ext.url.includes('us-core-ethnicity')) {
                if (ext.extension[0].valueCoding.display == 'Not Hispanic or Latino') {
                    isHispanic = 'no';
                }
                else if (ext.extension[0].valueCoding.display == 'Hispanic or Latino') {
                    isHispanic = 'yes';
                }
                break;
            }
        }

        return isHispanic;
    }

    getBirthPlace(extension) {
        let birthPlace = 'Unknown';

        for (let ext of extension) {
            if (ext.url.includes('patient-birthPlace')) {
                //console.log(ext);
                birthPlace = ext.valueAddress.state;
                break;
            }
        }

        return birthPlace;
    }

    isPermUSResident(address) {
        if (address.country == 'US') {
            return 'yes'
        }
        else {
            return 'no'
        }
    }
    //#endregion

    render() {
        return (
            <div className="px-4 mb-5">
                <div className="card-header bg-primary">
                    <h5 className="card-title text-white mt-2" id="exampleModalLabel">Demographics</h5>
                </div>
                <div className="modal-body mt-3 row">

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Last Name:</label>
                        <input type="text" className="form-control" readOnly value={this.props.patient.name[0].family} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">First Name:</label>
                        <input type="text" className="form-control" readOnly value={this.props.patient.name[0].given} />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Middle Name:</label>
                        <input type="text" className="form-control" readOnly value="TODO:" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Last Name at Birth (if different):</label>
                        <input type="text" className="form-control" readOnly value="TODO:" />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Last 4 digits of SSN:</label>
                        <input type="text" className="form-control" readOnly value={this.props.patient.identifier[2].value} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Date Of Birth:</label>
                        <input type="text" className="form-control" readOnly value={this.props.patient.birthDate} />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">State of Birth:</label>
                        <input type="text" className="form-control" readOnly value={this.getBirthPlace(this.props.patient.extension)} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Gender:</label>
                        <div>
                            <input className="form-check-input me-1" type="radio" name="gender" id="gendermale" readOnly checked={this.props.patient.gender == "male"} />
                            <label className="form-check-label me-3" htmlFor="radio3Example2">Male</label>
                            <input className="form-check-input me-1" type="radio" name="gender" id="genderfemale" readOnly checked={this.props.patient.gender == "female"} />
                            <label className="form-check-label" htmlFor="radio3Example2">Female</label>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Current Zip:</label>
                        <input type="text" className="form-control" readOnly value={this.props.patient.address[0].postalCode} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Emergency Phone (###-###-####):</label>
                        <input type="text" className="form-control" readOnly value={this.props.patient.telecom[0].value} />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Is patient residing in the US permanently?</label>
                        <div>
                            <input className="form-check-input me-1" type="radio" name="usPermanently" id="usresdientyes" readOnly checked={this.isPermUSResident(this.props.patient.address) == "yes"} />
                            <label className="form-check-label me-3" htmlFor="radio3Example2">Yes</label>
                            <input className="form-check-input me-1" type="radio" name="usPermanently" id="usresdientno" readOnly checked={this.isPermUSResident(this.props.patient.address) == "no"} />
                            <label className="form-check-label" htmlFor="radio3Example2">No</label>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Email:</label>
                        <input type="text" className="form-control" readOnly value="TODO:" />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Race:</label>
                        <input type="text" className="form-control" readOnly value={this.getRace(this.props.patient.extension)} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Is Patient of Hispanic Origin:</label>
                        <div>
                            <input className="form-check-input me-1" type="radio" name="hispanic" id="hispanicyes" readOnly checked={this.getHispanic(this.props.patient.extension) == "yes"} />
                            <label className="form-check-label me-3" htmlFor="radio3Example2">Yes</label>
                            <input className="form-check-input me-1" type="radio" name="hispanic" id="hispanicno" readOnly checked={this.getHispanic(this.props.patient.extension) == "no"} />
                            <label className="form-check-label me-3" htmlFor="radio3Example2">No</label>
                            <input className="form-check-input me-1" type="radio" name="hispanic" id="hispanicunk" readOnly checked={this.getHispanic(this.props.patient.extension) == "unknown"} />
                            <label className="form-check-label me-3" htmlFor="radio3Example2">Unknown</label>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Demographics;