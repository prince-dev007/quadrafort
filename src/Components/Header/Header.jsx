import Logo from '../Assests/img/logo.png';
import {Link} from 'react-router-dom';
import './Header.css';
import $ from 'jquery';
function Header() {
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light p-lg-4 fixed-top animate__animated animate__fadeInDown"   >
        <a class="navbar-brand" href="#Quadrafort">
            <img src={Logo} height="100px" alt="Quadrafort" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/About">
                About Us <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/SalesforeProducts">
                Salesfore Products <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/Career">
              Career <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/Contact">
               Contact Us <span class="sr-only">(current)</span>
              </Link>
            </li>        
          </ul>
        </div>
      </nav>
      

    </>
  );
}
export default Header;
