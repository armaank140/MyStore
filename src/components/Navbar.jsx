
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MyStore</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/">
          <a className="nav-link active"  aria-current="page" style={{textDecoration:'',color:''}} >Product</a>
          </Link>

        </li>
       
       
        
      </ul>
      <form className="d-flex" role="search">
        <Link to='/cart'>
        <button   className="btn btn-outline-success disabled" type="submit">Cart 0</button>
        </Link>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
