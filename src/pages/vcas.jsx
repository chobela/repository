import { Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import AppContext from "../context/appContext";

const Vcas = () => {
  const clients = useContext(AppContext);
  const children = clients.children.data.data;

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
          <i className="material-icons">people</i>
        </div>
        <h4 className="card-title">VCAs Enrolled</h4>
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
                  Unique ID
                </th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>VCA Name</th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>
                  Birth Date
                </th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>Gender</th>
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
                  Unique ID
                </th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>VCA Name</th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>
                  Birth Date
                </th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>Gender</th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>
                  Last edited
                </th>
                <th></th>
              </tr>
            </tfoot>
            <tbody>
              {children.map((child) => {
                return (
                  <tr key={child.json._id}>
                    <td>
                      <a className="btn btn-link btn-success btn-just-icon like">
                        <i className="material-icons">check</i>
                      </a>
                    </td>
                    <td>{child.json.attributes.unique_id}</td>
                    <td>{child.json.firstName + " " + child.json.lastName}</td>
                    <td>{child.json.attributes.adolescent_birthdate}</td>
                    <td>{child.json.attributes.gender}</td>
                    <td>{child.json.dateCreated}</td>
                    <td className="text-right">
                      <Link
                        to={`/household/${child.json._id}`}
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

export default Vcas;
