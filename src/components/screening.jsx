import { Link } from "react-router-dom";

const Screening = ({ house }) => {
  const h = house[0];

  return (
    <div className="col-md-12">
      <div className="card">
        <div className="card-header card-header-icon card-header-success">
          <div className="card-icon">
            <i className="material-icons">house</i>
          </div>
          <h3 className="card-title">
            <small className="category">CAREGIVER DETAILS</small>
          </h3>
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label className="bmd-label-floating">Household ID</label>
                  <input
                    type="text"
                    value={h.json.attributes.household_id}
                    className="form-control"
                    disabled
                  ></input>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label className="bmd-label-floating">Caregiver Name</label>
                  <input
                    type="text"
                    value={h.json.attributes.caregiver_name}
                    className="form-control"
                    disabled
                  ></input>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label className="bmd-label-floating">Caregiver Gender</label>
                  <input
                    type="text"
                    value={h.json.attributes.gender}
                    className="form-control"
                    disabled
                  ></input>
                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                  <label className="bmd-label-floating">Caregiver Phone</label>
                  <input
                    type="text"
                    value={h.json.attributes.caregiver_phone}
                    className="form-control"
                    disabled
                  ></input>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label className="bmd-label-floating">Date Enrolled</label>
                  <input
                    type="text"
                    value={h.json.attributes.date_enrolled}
                    className="form-control"
                    disabled
                  ></input>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label className="bmd-label-floating">Date Referred</label>
                  <input
                    type="text"
                    value={h.json.attributes.date_referred}
                    className="form-control"
                    disabled
                  ></input>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label className="bmd-label-floating">Marital Status</label>
                  <input
                    type="text"
                    value={h.json.attributes.marital_status}
                    className="form-control"
                    disabled
                  ></input>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label className="bmd-label-floating">
                    Is on HIV Treatment?
                  </label>
                  <input
                    type="text"
                    value={h.json.attributes.is_on_hiv_treatment}
                    className="form-control"
                    disabled
                  ></input>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label className="bmd-label-floating">
                    Caregiver HIV Status
                  </label>
                  <input
                    type="text"
                    value={h.json.attributes.caregiver_hiv_status}
                    className="form-control"
                    disabled
                  ></input>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label className="bmd-label-floating">
                    Caregiver ART Number
                  </label>
                  <input
                    type="text"
                    value={h.json.attributes.caregiver_art_number}
                    className="form-control"
                    disabled
                  ></input>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label className="bmd-label-floating">
                    Caregiver Birthdate
                  </label>
                  <input
                    type="text"
                    value={h.json.attributes.caregiver_birth_date}
                    className="form-control"
                    disabled
                  ></input>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label className="bmd-label-floating">Education</label>
                  <input
                    type="text"
                    value={h.json.attributes.caregiver_education}
                    className="form-control"
                    disabled
                  ></input>
                </div>
              </div>
            </div>
            <h3>
              <small className="category">HOUSEHOLD DETAILS</small>
            </h3>
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label className="bmd-label-floating">Number of beds</label>
                  <input
                    type="text"
                    value={h.json.attributes.beds}
                    className="form-control"
                    disabled
                  ></input>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label className="bmd-label-floating">Health Facility</label>
                  <input
                    type="text"
                    value={h.json.attributes.facility}
                    className="form-control"
                    disabled
                  ></input>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label className="bmd-label-floating">Malaria ITNs</label>
                  <input
                    type="text"
                    value={h.json.attributes.malaria_itns}
                    className="form-control"
                    disabled
                  ></input>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label className="bmd-label-floating">
                    Number of pregnant women
                  </label>
                  <input
                    type="text"
                    value={h.json.attributes.pregnant_women}
                    className="form-control"
                    disabled
                  ></input>
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col-md-3">
                            <div className="form-group">
                              <label className="bmd-label-floating">Partner</label>
                              <input
                                type="text"
                                value={h.json.attributes.partner}
                                className="form-control"
                                disabled
                              ></input>
                            </div>
                            </div>
              <div className="col-md-3">
                                          <div className="form-group">
                                            <label className="bmd-label-floating">Relation</label>
                                            <input
                                              type="text"
                                              value={h.json.attributes.relation}
                                              className="form-control"
                                              disabled
                                            ></input>
                                          </div>
                                          </div>
              <div className="col-md-3">
                                                        <div className="form-group">
                                                          <label className="bmd-label-floating">Screened</label>
                                                          <input
                                                            type="text"
                                                            value={h.json.attributes.screened}
                                                            className="form-control"
                                                            disabled
                                                          ></input>
                                                        </div>
                                                        </div>
              <div className="col-md-3">
                                                        <div className="form-group">
                                                          <label className="bmd-label-floating">Child MMD</label>
                                                          <input
                                                            type="text"
                                                            value={h.json.attributes.child_mmd}
                                                            className="form-control"
                                                            disabled
                                                          ></input>
                                                        </div>
                                                        </div>
                                                        </div>
              <div className="row">
              <div className="col-md-3">
                                                        <div className="form-group">
                                                          <label className="bmd-label-floating">Unique ID</label>
                                                          <input
                                                            type="text"
                                                            value={h.json.attributes.unique_id}
                                                            className="form-control"
                                                            disabled
                                                          ></input>
                                                        </div>
                                                        </div>
              <div className="col-md-3">
                                                        <div className="form-group">
                                                          <label className="bmd-label-floating">Acceptance</label>
                                                          <input
                                                            type="text"
                                                            value={h.json.attributes.acceptance}
                                                            className="form-control"
                                                            disabled
                                                          ></input>
                                                        </div>
                                                        </div>
              <div className="col-md-3">
                                                        <div className="form-group">
                                                          <label className="bmd-label-floating">ART Number</label>
                                                          <input
                                                            type="text"
                                                            value={h.json.attributes.art_number}
                                                            className="form-control"
                                                            disabled
                                                          ></input>
                                                        </div>
                                                        </div>
                                                        </div>
               <div className="row">
               <div className="col-md-3">
                                                         <div className="form-group">
                                                           <label className="bmd-label-floating">Entry type</label>
                                                           <input
                                                             type="text"
                                                             value={h.json.attributes.entry_type}
                                                             className="form-control"
                                                             disabled
                                                           ></input>
                                                         </div>
                                                         </div>

              <div className="col-md-3">
                                                        <div className="form-group">
                                                          <label className="bmd-label-floating">Case status</label>
                                                          <input
                                                            type="text"
                                                            value={h.json.attributes.case_status}
                                                            className="form-control"
                                                            disabled
                                                          ></input>
                                                        </div>
                                                        </div>
              <div className="col-md-3">
                                                        <div className="form-group">
                                                          <label className="bmd-label-floating">Date edited</label>
                                                          <input
                                                            type="text"
                                                            value={h.json.attributes.date_edited}
                                                            className="form-control"
                                                            disabled
                                                          ></input>
                                                        </div>
                                                        </div>
              <div className="col-md-3">
                                                        <div className="form-group">
                                                          <label className="bmd-label-floating">Household ID</label>
                                                          <input
                                                            type="text"
                                                            value={h.json.attributes.household_id}
                                                            className="form-control"
                                                            disabled
                                                          ></input>
                                                        </div>
                                                        </div>
                                                        </div>
              <div className="row">
              <div className="col-md-3">
                                                        <div className="form-group">
                                                          <label className="bmd-label-floating">VL check box</label>
                                                          <input
                                                            type="text"
                                                            value={h.json.attributes.vl_check_box}
                                                            className="form-control"
                                                            disabled
                                                          ></input>
                                                        </div>
                                                        </div>
              <div className="col-md-3">
                                                        <div className="form-group">
                                                          <label className="bmd-label-floating">ART check box</label>
                                                          <input
                                                            type="text"
                                                            value={h.json.attributes.art_check_box}
                                                            className="form-control"
                                                            disabled
                                                          ></input>
                                                        </div>
                                                        </div>
              <div className="col-md-3">
                                                        <div className="form-group">
                                                          <label className="bmd-label-floating">Caregiver sex</label>
                                                          <input
                                                            type="text"
                                                            value={h.json.attributes.caregiver_sex}
                                                            className="form-control"
                                                            disabled
                                                          ></input>
                                                        </div>
                                                        </div>
              <div className="col-md-3">
                                                        <div className="form-group">
                                                          <label className="bmd-label-floating">Client result</label>
                                                          <input
                                                            type="text"
                                                            value={h.json.attributes.client_result}
                                                            className="form-control"
                                                            disabled
                                                          ></input>
                                                        </div>
                                                        </div>
                                                        </div>
              <h3>
                            <small className="category">INDEX VCA DETAILS</small>
                          </h3>


              <div className="row">
              <div className="col-md-3">
                                                        <div className="form-group">
                                                          <label className="bmd-label-floating">Date enrolled</label>
                                                          <input
                                                            type="text"
                                                            value={h.json.attributes.date_enrolled}
                                                            className="form-control"
                                                            disabled
                                                          ></input>
                                                        </div>
                                                        </div>
              <div className="col-md-3">
                                                        <div className="form-group">
                                                          <label className="bmd-label-floating">Date referred</label>
                                                          <input
                                                            type="text"
                                                            value={h.json.attributes.date_referred}
                                                            className="form-control"
                                                            disabled
                                                          ></input>
                                                        </div>
                                                        </div>
              <div className="col-md-3">
                                                        <div className="form-group">
                                                          <label className="bmd-label-floating">Date screened</label>
                                                          <input
                                                            type="text"
                                                            value={h.json.attributes.date_screened}
                                                            className="form-control"
                                                            disabled
                                                          ></input>
                                                        </div>
                                                        </div>
              <div className="col-md-3">
                                                                                                  <div className="form-group">
                                                                                                    <label className="bmd-label-floating">Takes drugs to prevent other diseases</label>
                                                                                                    <input
                                                                                                      type="text"
                                                                                                      value={h.json.attributes.takes_drugs_to_prevent_other_diseases}
                                                                                                      className="form-control"
                                                                                                      disabled
                                                                                                    ></input>
                                                                                                  </div>
                                                                                                  </div>
                                                        </div>
              <div className="row">
              <div className="col-md-3">
                                                        <div className="form-group">
                                                          <label className="bmd-label-floating">District</label>
                                                          <input
                                                            type="text"
                                                            value={h.json.attributes.countyDistrict}
                                                            className="form-control"
                                                            disabled
                                                          ></input>
                                                        </div>
                                                        </div>
              <div className="col-md-3">
                                                        <div className="form-group">
                                                          <label className="bmd-label-floating">Date HIV known</label>
                                                          <input
                                                            type="text"
                                                            value={h.json.attributes.date_hiv_known}
                                                            className="form-control"
                                                            disabled
                                                          ></input>
                                                        </div>
                                                        </div>
              <div className="col-md-3">
                                                        <div className="form-group">
                                                          <label className="bmd-label-floating">Relationship</label>
                                                          <input
                                                            type="text"
                                                            value={h.json.attributes.e_relationship}
                                                            className="form-control"
                                                            disabled
                                                          ></input>
                                                        </div>
                                                        </div>
              <div className="col-md-3">
                                                                      <div className="form-group">
                                                                        <label className="bmd-label-floating">Emergency Name</label>
                                                                        <input
                                                                          type="text"
                                                                          value={h.json.attributes.emergency_name}
                                                                          className="form-control"
                                                                          disabled
                                                                        ></input>
                                                                      </div>
                                                                      </div>
                                                                      </div>
              <div className="row">
              <div className="col-md-3">
                                                                      <div className="form-group">
                                                                        <label className="bmd-label-floating">Marital Status</label>
                                                                        <input
                                                                          type="text"
                                                                          value={h.json.attributes.marital_status}
                                                                          className="form-control"
                                                                          disabled
                                                                        ></input>
                                                                      </div>
                                                                      </div>
              <div className="col-md-3">
                                                                      <div className="form-group">
                                                                        <label className="bmd-label-floating">Pregnant Women</label>
                                                                        <input
                                                                          type="text"
                                                                          value={h.json.attributes.pregnant_women}
                                                                          className="form-control"
                                                                          disabled
                                                                        ></input>
                                                                      </div>
                                                                      </div>
              <div className="col-md-3">
                                                                      <div className="form-group">
                                                                        <label className="bmd-label-floating">Screening date</label>
                                                                        <input
                                                                          type="text"
                                                                          value={h.json.attributes.screening_date}
                                                                          className="form-control"
                                                                          disabled
                                                                        ></input>
                                                                      </div>
                                                                      </div>
              <div className="col-md-3">
                                                                      <div className="form-group">
                                                                        <label className="bmd-label-floating">Approved Family</label>
                                                                        <input
                                                                          type="text"
                                                                          value={h.json.attributes.approved_family}
                                                                          className="form-control"
                                                                          disabled
                                                                        ></input>
                                                                      </div>
                                                                      </div>
                                                                      </div>
              <div className="row">
              <div className="col-md-3">
                                                                      <div className="form-group">
                                                                        <label className="bmd-label-floating">Client screened</label>
                                                                        <input
                                                                          type="text"
                                                                          value={h.json.attributes.client_screened}
                                                                          className="form-control"
                                                                          disabled
                                                                        ></input>
                                                                      </div>
                                                                      </div>
              <div className="col-md-3">
                                                                      <div className="form-group">
                                                                        <label className="bmd-label-floating">Enrolled date</label>
                                                                        <input
                                                                          type="text"
                                                                          value={h.json.attributes.enrolled_date}
                                                                          className="form-control"
                                                                          disabled
                                                                        ></input>
                                                                      </div>
                                                                      </div>
              <div className="col-md-3">
                                                                      <div className="form-group">
                                                                        <label className="bmd-label-floating">Index check box</label>
                                                                        <input
                                                                          type="text"
                                                                          value={h.json.attributes.index_check_box}
                                                                          className="form-control"
                                                                          disabled
                                                                        ></input>
                                                                      </div>
                                                                      </div>
              <div className="col-md-3">
                                                                      <div className="form-group">
                                                                        <label className="bmd-label-floating">Is HIV positive</label>
                                                                        <input
                                                                          type="text"
                                                                          value={h.json.attributes.is_hip_positive}
                                                                          className="form-control"
                                                                          disabled
                                                                        ></input>
                                                                      </div>
                                                                      </div>
                                                                      </div>
              <div className="row">
              <div className="col-md-3">
                                                                      <div className="form-group">
                                                                        <label className="bmd-label-floating">Date started ART</label>
                                                                        <input
                                                                          type="text"
                                                                          value={h.json.attributes.date_started_art}
                                                                          className="form-control"
                                                                          disabled
                                                                        ></input>
                                                                      </div>
                                                                      </div>
              <div className="col-md-3">
                                                                      <div className="form-group">
                                                                        <label className="bmd-label-floating">Consent check box</label>
                                                                        <input
                                                                          type="text"
                                                                          value={h.json.attributes.consent_check_box}
                                                                          className="form-control"
                                                                          disabled
                                                                        ></input>
                                                                      </div>
                                                                      </div>
              <div className="col-md-3">
                                                                      <div className="form-group">
                                                                        <label className="bmd-label-floating">Date edited check</label>
                                                                        <input
                                                                          type="text"
                                                                          value={h.json.attributes.date_edited_check}
                                                                          className="form-control"
                                                                          disabled
                                                                        ></input>
                                                                      </div>
                                                                      </div>
              <div className="col-md-3">
                                                                      <div className="form-group">
                                                                        <label className="bmd-label-floating">Screening Location</label>
                                                                        <input
                                                                          type="text"
                                                                          value={h.json.attributes.screening_location}
                                                                          className="form-control"
                                                                          disabled
                                                                        ></input>
                                                                      </div>
                                                                      </div>
                                                                      </div>
              <div className="row">
              <div className="col-md-3">
                                                                      <div className="form-group">
                                                                        <label className="bmd-label-floating">Active on Treatment</label>
                                                                        <input
                                                                          type="text"
                                                                          value={h.json.attributes.active_on_treatment}
                                                                          className="form-control"
                                                                          disabled
                                                                        ></input>
                                                                      </div>
                                                                      </div>
              <div className="col-md-3">
                                                                      <div className="form-group">
                                                                        <label className="bmd-label-floating">Biological children</label>
                                                                        <input
                                                                          type="text"
                                                                          value={h.json.attributes.biological_children}
                                                                          className="form-control"
                                                                          disabled
                                                                        ></input>
                                                                      </div>
                                                                      </div>
              <div className="col-md-3">
                                                                      <div className="form-group">
                                                                        <label className="bmd-label-floating">Caregiver education</label>
                                                                        <input
                                                                          type="text"
                                                                          value={h.json.attributes.caregiver_education}
                                                                          className="form-control"
                                                                          disabled
                                                                        ></input>
                                                                      </div>
                                                                      </div>
              <div className="col-md-3">
                                                                      <div className="form-group">
                                                                        <label className="bmd-label-floating">Is on HIV treatment</label>
                                                                        <input
                                                                          type="text"
                                                                          value={h.json.attributes.is_on_hiv_treatment}
                                                                          className="form-control"
                                                                          disabled
                                                                        ></input>
                                                                      </div>
                                                                      </div>
                                                                      </div>
              <div className="row">
              <div className="col-md-3">
                                                                      <div className="form-group">
                                                                        <label className="bmd-label-floating">Violence six months</label>
                                                                        <input
                                                                          type="text"
                                                                          value={h.json.attributes.violence_six_months}
                                                                          className="form-control"
                                                                          disabled
                                                                        ></input>
                                                                      </div>
                                                                      </div>
              <div className="col-md-3">
                                                                      <div className="form-group">
                                                                        <label className="bmd-label-floating">Adolescent birthdate</label>
                                                                        <input
                                                                          type="text"
                                                                          value={h.json.attributes.adolescent_birthdate}
                                                                          className="form-control"
                                                                          disabled
                                                                        ></input>
                                                                      </div>
                                                                      </div>
              <div className="col-md-3">
                                                                      <div className="form-group">
                                                                        <label className="bmd-label-floating">Caregiver ART number</label>
                                                                        <input
                                                                          type="text"
                                                                          value={h.json.attributes.caregiver_art_number}
                                                                          className="form-control"
                                                                          disabled
                                                                        ></input>
                                                                      </div>
                                                                      </div>
              <div className="col-md-3">
                                                                                    <div className="form-group">
                                                                                      <label className="bmd-label-floating">Caregiver birthdate</label>
                                                                                      <input
                                                                                        type="text"
                                                                                        value={h.json.attributes.caregiver_birth_date}
                                                                                        className="form-control"
                                                                                        disabled
                                                                                      ></input>
                                                                                    </div>
                                                                                    </div>
                                                                                    </div>
              <div className="row">
              <div className="col-md-3">
                                                                                    <div className="form-group">
                                                                                      <label className="bmd-label-floating">Caregiver HIV status</label>
                                                                                      <input
                                                                                        type="text"
                                                                                        value={h.json.attributes.caregiver_hiv_status}
                                                                                        className="form-control"
                                                                                        disabled
                                                                                      ></input>
                                                                                    </div>
                                                                                    </div>
              <div className="col-md-3">
                                                                                    <div className="form-group">
                                                                                      <label className="bmd-label-floating">TPT client initiated</label>
                                                                                      <input
                                                                                        type="text"
                                                                                        value={h.json.attributes.tpt_client_initiated}
                                                                                        className="form-control"
                                                                                        disabled
                                                                                      ></input>
                                                                                    </div>
                                                                                    </div>
              <div className="col-md-3">
                                                                                    <div className="form-group">
                                                                                      <label className="bmd-label-floating">TPT client eligibility</label>
                                                                                      <input
                                                                                        type="text"
                                                                                        value={h.json.attributes.tpt_client_eligibility}
                                                                                        className="form-control"
                                                                                        disabled
                                                                                      ></input>
                                                                                    </div>
                                                                                    </div>
              <div className="col-md-3">
                                                                                    <div className="form-group">
                                                                                      <label className="bmd-label-floating">Date offered enrollment</label>
                                                                                      <input
                                                                                        type="text"
                                                                                        value={h.json.attributes.date_offered_enrollment}
                                                                                        className="form-control"
                                                                                        disabled
                                                                                      ></input>
                                                                                    </div>
                                                                                    </div>
                                                                                    </div>
              <div className="row">
              <div className="col-md-3">
                                                                                    <div className="form-group">
                                                                                      <label className="bmd-label-floating">Screening location home</label>
                                                                                      <input
                                                                                        type="text"
                                                                                        value={h.json.attributes.screening_location_home}
                                                                                        className="form-control"
                                                                                        disabled
                                                                                      ></input>
                                                                                    </div>
                                                                                    </div>
              <div className="col-md-3">
                                                                                    <div className="form-group">
                                                                                      <label className="bmd-label-floating">Viral load results on file</label>
                                                                                      <input
                                                                                        type="text"
                                                                                        value={h.json.attributes.viral_load_results_on_file}
                                                                                        className="form-control"
                                                                                        disabled
                                                                                      ></input>
                                                                                    </div>
                                                                                    </div>
              <div className="col-md-3">
                                                                                    <div className="form-group">
                                                                                      <label className="bmd-label-floating">Children violence six months</label>
                                                                                      <input
                                                                                        type="text"
                                                                                        value={h.json.attributes.children_violence_six_months}
                                                                                        className="form-control"
                                                                                        disabled
                                                                                      ></input>
                                                                                    </div>
                                                                                    </div>
              <div className="col-md-3">
                                                                                    <div className="form-group">
                                                                                      <label className="bmd-label-floating">Is the child caregiver an fsw</label>
                                                                                      <input
                                                                                        type="text"
                                                                                        value={h.json.attributes.is_the_child_caregiver_an_fsw}
                                                                                        className="form-control"
                                                                                        disabled
                                                                                      ></input>
                                                                                    </div>
                                                                                    </div>
                                                                                    </div>
              <div className="row">
              <div className="col-md-3">
                                                                                    <div className="form-group">
                                                                                      <label className="bmd-label-floating">Child ever experienced sexual violence</label>
                                                                                      <input
                                                                                        type="text"
                                                                                        value={h.json.attributes.child_ever_experienced_sexual_violence}
                                                                                        className="form-control"
                                                                                        disabled
                                                                                      ></input>
                                                                                    </div>
                                                                                    </div>
              <div className="col-md-3">
                                                                                    <div className="form-group">
                                                                                      <label className="bmd-label-floating">Is biological mother of child living with HIV</label>
                                                                                      <input
                                                                                        type="text"
                                                                                        value={h.json.attributes.is_biological_child_of_mother_living_with_hiv}
                                                                                        className="form-control"
                                                                                        disabled
                                                                                      ></input>
                                                                                    </div>
                                                                                    </div>
                                                                                    </div>

            <Link to={"/households"}>
              <button className="btn btn-success pull-right">Back</button>
            </Link>
            <div className="clearfix" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Screening;