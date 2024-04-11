
//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import {
   Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import * as bootstrap from 'bootstrap';
<link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
    crossorigin="anonymous"
/>
function MyNavbar(){
    return (

        <>
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">BadBank</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" aria-current>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className='nav-item'>
        <a className="nav-link" href="/Register">Create Account</a>
        </li>
        <li className='nav-item'>
        <a className="nav-link" href="/Login">Login</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">

            <li>
            <a className="dropdown-item" href="/Deposit">Deposit</a>
            </li>
            <li>
            <a className="dropdown-item" href="/Withdraw">Withdraw</a>
            </li>
            <li>
            <a className="dropdown-item" href="/Data">AllData</a>
            </li> </ul> </li>
    
        </ul>
    </div>
  </div>
</nav> 
        </>

    );
}


    
    export default MyNavbar;

