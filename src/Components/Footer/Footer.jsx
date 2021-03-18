import Quad from "../Assests/img/logo.png";
function Footer(){
    return(
        <>
             <div class="container-fluid" id="section6">
        <div class="row p-lg-3">
          <div class="col-lg-3 p-lg-3">
            <img src={Quad} height="100px" alt="Quadrafort" />
            <p>
              We at Quadrafort assist our customers in enhancing Productivity
              and Business efficiency achieved by our best in class Cloud
              Solutions and innovative 360° consulting services.
            </p>
          </div>
          <div class="col-lg-3 p-lg-4">
            <h2 class="mt-3">Quick Links</h2>
            <ul class="mt-3">
              <li>
                <i class="bx bxs-right-arrow"></i> Home
              </li>
              <li>
                <i class="bx bxs-right-arrow"></i> About Us
              </li>
              <li>
                <i class="bx bxs-right-arrow"></i> Salesforce
              </li>
              <li>
                <i class="bx bxs-right-arrow"></i> Carrier
              </li>
              <li>
                <i class="bx bxs-right-arrow"></i> Contact Us
              </li>
            </ul>
          </div>
          <div class="col-lg-3 p-lg-4">
            <h2 class="mt-3">Company</h2>
            <ul class="mt-3">
              <li>
                <i class="bx bxs-right-arrow"></i> Home
              </li>
              <li>
                <i class="bx bxs-right-arrow"></i> About Us
              </li>
              <li>
                <i class="bx bxs-right-arrow"></i> Salesforce
              </li>
              <li>
                <i class="bx bxs-right-arrow"></i> Carrier
              </li>
              <li>
                <i class="bx bxs-right-arrow"></i> Contact Us
              </li>
            </ul>
          </div>
          <div class="col-lg-3 p-lg-4">
            <h2 class="mt-3">Contact</h2>
            <p>Address: Quadrafort, Advant Navis Business Park, Sector 142, Noida - 20130, India</p>
            <p>Phone: + 91 120 4561770<br/>
                Fax: + 91 120 4561770<br/>
                Email: contact@quadrafort.com<br/>
                Website: www.quadrafort.com</p>
          </div>
        </div>
      </div>
      <div class="container-fluid p-lg-2" id="footerSec">
        <div class="container text-center">
          <p>&copy; Copyright All Rights Are Reserved</p>
          </div>
        </div>
        </>
    )
}
export default Footer;