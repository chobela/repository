import React, { useState, useEffect } from "react";
import axios from "axios";

const Members = ({ household_id }) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/households/member/${household_id}`)
      .then((response) => {
        console.log(response.data);
        setPeople(response.data.data);
      })
      .catch((error) => console.error("axios error: " + error));
  }, [household_id]);

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="tab-pane" id="members">
      <table className="table">
        <tbody>
          {people.map((person) => {
            return (
              <tr key={person.uid}>
                <td>
                  <span style={{ fontWeight: "bold" }}>User ID </span>{" "}
                  {person.uid}
                </td>
                <td>
                  <span style={{ fontWeight: "bold" }}>Gender </span>{" "}
                  {capitalizeFirst(person.vca_gender)}
                </td>
                <td>
                  <span style={{ fontWeight: "bold" }}>D.O.B </span>{" "}
                  {person.birthdate}
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
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Members;
