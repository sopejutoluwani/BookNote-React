import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/home"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Book Notes</span>
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/home" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/new" className="nav-link">
              New-Book
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-link">
              Sign In
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Nav;
