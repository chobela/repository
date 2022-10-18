import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const active = location.pathname;

  return (
    <div className="sidebar" data-color="green" data-background-color="black">
      <div className="sidebar-wrapper">
        <div className="user">
          <div className="photo">
            <img src="/assets/img/person.jpg" />
          </div>
          <div className="user-info">
            <a
              data-toggle="collapse"
              href="#collapseExample"
              className="username"
            >
              <span>
                Admin
                <b className="caret" />
              </span>
            </a>
            <div className="collapse" id="collapseExample">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="sidebar-mini"> MP </span>
                    <span className="sidebar-normal"> My Profile </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="sidebar-mini"> EP </span>
                    <span className="sidebar-normal"> Edit Profile </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="sidebar-mini"> S </span>
                    <span className="sidebar-normal"> Settings </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="nav">
          <li className={active === "/" ? "nav-item active" : "nav-item"}>
            <Link className="nav-link" to="/">
              <i className="material-icons">dashboard</i>
              <p> Repository </p>
            </Link>
          </li>

          <li
            className={
              active === "/households" ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/">
              <i className="material-icons">list</i>
              <p> My Tracker </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
