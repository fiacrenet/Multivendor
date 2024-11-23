import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">Market Place</a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Brand</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Category</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control ms-5" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
  );
}

export default App;