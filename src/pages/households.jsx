import { Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import AppContext from "../context/appContext";

const Households = ({ history }) => {
  const clients = useContext(AppContext);
  const households = clients.data[0];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/myTable.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="card">
      <div className="card-header card-header-primary card-header-icon">
        <div className="card-icon">
          <i className="material-icons">houses</i>
        </div>
        <h4 className="card-title">Households</h4>
      </div>
      <div className="card-body">
        <div className="toolbar"></div>
        <div className="material-datatables">
          <table
            id="myTable"
            className="table table-striped table-no-bordered table-hover"
            cellSpacing={2}
            width="100%"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>Screened</th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>
                  Household ID
                </th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>
                  Caregiver
                </th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>
                  Caseworker
                </th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>
                  Caseworker phone
                </th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>
                  Last edited
                </th>
                <th></th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>Screened</th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>
                  Household ID
                </th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>
                  Caregiver
                </th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>
                  Caseworker
                </th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>
                  Caseworker phone
                </th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>
                  Last edited
                </th>
                <th></th>
              </tr>
            </tfoot>
            <tbody>
              {households.map((house) => {
                return (
                  <tr key={house.json._id}>
                    <td>
                      <a className="btn btn-link btn-success btn-just-icon like">
                        <i className="material-icons">
                          {house.json.attributes.screened == "true"
                            ? "check"
                            : "close"}
                        </i>
                      </a>
                    </td>
                    <td>{house.json.attributes.household_id}</td>
                    <td>{house.json.attributes.caregiver_name}</td>
                    <td>{house.json.attributes.caseworker_name}</td>
                    <td>{house.json.attributes.phone}</td>
                    <td>{house.json.dateEdited}</td>
                    <td className="text-right">
                      <Link
                        to={`/household/${house.json._id}`}
                        class="btn btn-link btn-info btn-just-icon like"
                      >
                        <i class="material-icons">visibility</i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Households;
