import Screening from "../components/screening";
import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import AppContext from "../context/appContext";
import Members from "../components/members";

const Household = () => {
  const { id } = useParams();

  const clients = useContext(AppContext);
  const households = clients.data[0];

  const house = households.filter((h) => h.json._id === id);

  return (
    <div className="col-lg col-md">
      <div className="card">
        <div className="card-header card-header-tabs card-header-info">
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <span className="nav-tabs-title">Forms:</span>
              <ul className="nav nav-tabs" data-tabs="tabs">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#screening"
                    data-toggle="tab"
                  >
                    <i className="material-icons">houses</i> Household Screening
                    <div className="ripple-container" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#members" data-toggle="tab">
                    <i className="material-icons">people</i> Family Members
                    <div className="ripple-container" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#messages" data-toggle="tab">
                    <i className="material-icons">arrow_right</i> Visits
                    <div className="ripple-container" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#settings" data-toggle="tab">
                    <i className="material-icons">article</i> Case Plans
                    <div className="ripple-container" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#referrals" data-toggle="tab">
                    <i className="material-icons">article</i> Referrals
                    <div className="ripple-container" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#vassessment" data-toggle="tab">
                    <i className="material-icons">healing</i> Vlnerability
                    Assessment
                    <div className="ripple-container" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#settings" data-toggle="tab">
                    <i className="material-icons">healing</i> HIV Risk
                    Assessment
                    <div className="ripple-container" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#settings" data-toggle="tab">
                    <i className="material-icons">school</i> Graduation
                    <div className="ripple-container" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="tab-content">
            <div className="tab-pane active" id="screening">
              <Screening house={house} />
            </div>
            <Members household_id={house[0].json.attributes.household_id} />
            <div className="tab-pane" id="settings">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                          />
                          <span className="form-check-sign">
                            <span className="check" />
                          </span>
                        </label>
                      </div>
                    </td>
                    <td>
                      Lines From Great Russian Literature? Or E-mails From My
                      Boss?
                    </td>
                    <td className="td-actions text-right">
                      <button
                        type="button"
                        rel="tooltip"
                        title="Edit Task"
                        className="btn btn-primary btn-link btn-sm"
                      >
                        <i className="material-icons">edit</i>
                      </button>
                      <button
                        type="button"
                        rel="tooltip"
                        title="Remove"
                        className="btn btn-danger btn-link btn-sm"
                      >
                        <i className="material-icons">close</i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            defaultChecked=""
                          />
                          <span className="form-check-sign">
                            <span className="check" />
                          </span>
                        </label>
                      </div>
                    </td>
                    <td>
                      Flooded: One year later, assessing what was lost and what
                      was found when a ravaging rain swept through metro Detroit
                    </td>
                    <td className="td-actions text-right">
                      <button
                        type="button"
                        rel="tooltip"
                        title="Edit Task"
                        className="btn btn-primary btn-link btn-sm"
                      >
                        <i className="material-icons">edit</i>
                      </button>
                      <button
                        type="button"
                        rel="tooltip"
                        title="Remove"
                        className="btn btn-danger btn-link btn-sm"
                      >
                        <i className="material-icons">close</i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            defaultChecked=""
                          />
                          <span className="form-check-sign">
                            <span className="check" />
                          </span>
                        </label>
                      </div>
                    </td>
                    <td>
                      Sign contract for "What are conference organizers afraid
                      of?"
                    </td>
                    <td className="td-actions text-right">
                      <button
                        type="button"
                        rel="tooltip"
                        title="Edit Task"
                        className="btn btn-primary btn-link btn-sm"
                      >
                        <i className="material-icons">edit</i>
                      </button>
                      <button
                        type="button"
                        rel="tooltip"
                        title="Remove"
                        className="btn btn-danger btn-link btn-sm"
                      >
                        <i className="material-icons">close</i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Household;
