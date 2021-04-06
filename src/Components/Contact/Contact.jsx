import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./contact.css";
import $ from 'jquery'
function Contact() {
    $(document).ready(function(){
        $(this).scrollTop(0);
    });
  return (
    <>
      <div class="container-fluid" id="contact1">
        <Header />
        <div class="container">
          <h1>
            <span>Contact</span> Us
          </h1>
          <p>
          <b>We appreciate your interest in Quadrafort Technologies Pvt. Ltd.</b><br/>
          Have any questions? We'd love to hear from you.
Pls get in touch via  email , phone or fill in the form below and we will get back to you in 24 hours.
          </p>
          <div class="containerNew">
            <a href="mailto:info@quadrafort.com" target="_blank" rel="noreferrer" >info@quadrafort.com</a>
          </div>
        </div>
      </div>
      <div class="container-fliud mt-5" id="contact2">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 p-lg-5">
              <h2>
                <span>Email</span>
              </h2>
              <p>Feel free to mail us.!!</p>
              <h4>
             
                <a
                  href="mailto:info@quadrafort.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Info@quadrafort.com
                </a>
              </h4>
              <h2>
                <span>Location</span>
              </h2>
              <p>
                <strong>Phone: +91 11-41425335 </strong><br/>
                Regd Office - 3/15, East Patel Nagar, New Delhi - 110008,India
              </p>
              <h4>
                <a
                  href="https://goo.gl/maps/zmYPLurbJgmnkE1g7"
                  rel="noreferrer"
                  target="_blank"
                >
                  Our office Location on Google Map
                </a>
              </h4>
            </div>
            <div class="col-lg-6 p-lg-2 mb-5">
              <h2>How can we help?</h2>
              <form>
                <div class="form-group">
                  <label>Enter your Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    required
                    placeholder="Enter your Full Name"
                  />
                </div>
                <div class="form-group">
                  <label>Enter your Email Address</label>
                  <input
                    type="text"
                    class="form-control"
                    required
                    placeholder="Enter your Email Address"
                  />
                </div>
                <div class="form-group">
                  <label>
                    Select a topic from the list below to help us connect you to
                    the right department.
                  </label>
                  <select class="form-control">
                    <option selected>Choose Department</option>
                    <option>Sales</option>
                    <option>Careers</option>
                    <option>Solutions</option>
                    <option>Marketing</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Enter your Message</label>
                  <textarea
                    rows="4"
                    type="text"
                    required
                    class="form-control"
                    placeholder="Enter your Email Address"
                  />
                </div>
                <button type="submit" class="btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
