import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
const Myfiles = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/myTable.js";
    script.async = true;
    document.body.appendChild(script);

    const customData = require("../data/customData.json");
    setDocs(customData.datax);
  }, []);

  return (
    <div className="card">
      <div className="card-header card-header-primary card-header-icon">
        <div className="card-icon">
          <i className="material-icons">folder</i>
        </div>
        <h4 className="card-title">Files</h4>
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
                <th style={{ fontWeight: "normal", fontSize: 14 }}></th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>Owner</th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>File</th>

                <th style={{ fontWeight: "normal", fontSize: 14 }}>
                  Last edited
                </th>
                <th></th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th style={{ fontWeight: "normal", fontSize: 14 }}></th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>Owner</th>
                <th style={{ fontWeight: "normal", fontSize: 14 }}>File</th>

                <th style={{ fontWeight: "normal", fontSize: 14 }}>
                  Last edited
                </th>
                <th></th>
              </tr>
            </tfoot>
            <tbody>
              {docs.map((doc) => {
                return (
                  <tr key={doc.id}>
                    <td>
                      <a className="btn btn-link btn-warning btn-just-icon like">
                        <i className="material-icons">{"folder"}</i>
                      </a>
                    </td>

                    <td>
                      {doc.fileOwner === "0"
                        ? "All"
                        : doc.fileOwner === "1"
                        ? "PESA"
                        : "ABS"}
                    </td>
                    <td>
                      <a href={doc.fileLink}>{doc.fileName}</a>
                    </td>
                    <td>{doc.editDate}</td>
                    <td className="text-right">
                      <a
                        href={doc.fileLink}
                        class="btn btn-link btn-info btn-just-icon like"
                      >
                        <i class="material-icons">visibility</i>
                      </a>
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

export default Myfiles;
