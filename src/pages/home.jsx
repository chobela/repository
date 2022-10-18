import { useLocation } from "react-router-dom";
import React, { useContext } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import AppContext from "../context/appContext";

const Home = () => {
  const clients = useContext(AppContext);
  console.log(clients);

  const facilities = 9;

  return (
    <>
      <h3>Mkushi</h3>

      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-header card-header-info card-header-icon">
              <div className="card-icon">
                <i className="material-icons">apartment</i>
              </div>
              <p className="card-category">Facilities</p>
              <h3 className="card-title">
                {clients.data ? (
                  clients.data[0].length
                ) : (
                  <div style={{ float: "right" }}>
                    <BounceLoader size={35} color={"#808080"} loading={true} />
                  </div>
                )}
              </h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons">date_range</i> Last 24 Hours
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-header card-header-info card-header-icon">
              <div className="card-icon">
                <i className="material-icons">houses</i>
              </div>
              <p className="card-category">Households</p>
              <h3 className="card-title">
                {clients.data ? (
                  clients.data[0].length
                ) : (
                  <div style={{ float: "right" }}>
                    <BounceLoader size={35} color={"#808080"} loading={true} />
                  </div>
                )}
              </h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons">date_range</i> Last 2 Months
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-header card-header-info card-header-icon">
              <div className="card-icon">
                <i className="material-icons">people</i>
              </div>
              <p className="card-category">VCA Register</p>
              <h3 className="card-title">
                {clients.children ? (
                  clients.children.data.data.length
                ) : (
                  <div style={{ float: "right" }}>
                    <BounceLoader size={35} color={"#808080"} loading={true} />
                  </div>
                )}
              </h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons">date_range</i> Last 2 Months
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-header card-header-info card-header-icon">
              <div className="card-icon">
                <i className="material-icons">woman</i>
              </div>
              <p className="card-category">Mother Register</p>
              <h3 className="card-title">
                {clients.data ? (
                  1797
                ) : (
                  <div style={{ float: "right" }}>
                    <BounceLoader size={35} color={"#808080"} loading={true} />
                  </div>
                )}
              </h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons">date_range</i> Last 24 Hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
