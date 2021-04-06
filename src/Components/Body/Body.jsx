import Header from "../Header/Header";
import "../Assests/css/Style.css";
import LogoQ from "../Assests/img/logo.png";
import Salesfore from "../Assests/img/Salesforce_Partner_Badge_Trnsp_Hrzntl_RGB.png";
import Logo from "../Assests/img/hand.svg";
import Image from "../Assests/img/christian-wiediger-WkfDrhxDMC8-unsplash.jpg";
import Image21 from "../Assests/img/firmbee-com-jrh5lAq-mIs-unsplash.jpg";
import Image22 from "../Assests/img/isaac-smith-6EnTPvPPL6I-unsplash.jpg";
import Image2 from "../Assests/img/process.png";
import Mobile from "../Assests/img/mobile.png";
import Footer from "../Footer/Footer";
import Parks from "../Assests/img/parks.png";
import Fortune from "../Assests/img/fortune.png";
import dentsu from "../Assests/img/dentsu.png";
import { useState } from "react";
import SAP_logo from "../Assests/img/SAP_logo.png";
import $ from 'jquery'
function Body() {
  $(document).ready(function(){
    $(this).scrollTop(0);
});
  const [progress, setProgress] = useState(false);
  window.addEventListener("load", checkLoad);
  function checkLoad() {
    setProgress(true);
    endLoad();
  }
  function endLoad() {
    setProgress(false);
  }
  return (
    <>
      {progress ? (
        <div
          class="container-fluid text-center p-0 d-flex align-items-center justify-content-center"
          id="loading"
        >
          <img src={LogoQ} class="img-fluid" alt="Quadrafort" />
        </div>
      ) : null}

      <div class="container-fluid " id="section1">
        <Header />
        <br />
        <div class="container animate__animated animate__fadeInUp ">
          <div class="row">
            <div class="col-lg-6 " >
              <img src={Salesfore} height="100px" alt="" />
            </div>
            <div class="col-lg-6">
              <img src={SAP_logo} height="100px" alt="" />
            </div>
          </div>
          <h1>
            WE ARE HERE TO HELP YOU WITH <br /> QUALITY , FOCUS & EXCELLENCE
          </h1>
          <p>
            Assist our customers in enhancing Productivity and bussiness
            efficiency.
          </p>
          <button class="btn mt-5 shadow-lg">Consult Us</button>
        </div>
      </div>
      <div class="container-fluid mt-5" id="section2">
        <h1>About Quadrafort</h1>
        <div class="row mt-3 p-lg-5 ">
          <div class="col-lg-6">
            <img src={Logo} class="img-fluid" alt="" />
          </div>
          <div class="col-lg-6 p-lg-5">
            <h2>WHO WE ARE ?</h2>
            <h3 class="mt-3">Get to know about our company</h3>
            <p>
              We at Quadrafort assist our customers in enhancing Productivity
              and Business efficiency achieved by our best in class Cloud
              Solutions and innovative 360° consulting services. We are an
              end-to-end Salesforce services provider assisted by a team of
              certified technologists aided by domain experience & proficiency
              garnered across industries and business verticals.
            </p>
            <p>
              We endeavour to empower organisations in their digital
              transformation journey with least disruption with emphasis on
              proper adoption, to aid in achieving complex business goals.
            </p>
            <button class="btn shadow-lg">Read More</button>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-5" id="section4">
        <div class="container p-lg-5">
          <h1>Our Consulting Service</h1>
          <br />
          <p>
          Our Technology Consulting Services focus on clients most critical issues and aspirations for an optimum futuristic Technology Transformation.
          </p>
          <div class="row">
            <div class="col-lg-6">
              <img src={Image2} alt="" />
              <h3>Process Consulting</h3>
              <p>
              Our expert team with expertise across industries work hand in hand with the Clients to co create solutions in a pursuit to advance the clients growth. We also help in client’s technological evolution by offering best in class authentic discovery process and understanding of the landscape.
              </p>
            </div>
            <div class="col-lg-6">
              <img src={Image2} alt="" />
              <h3>Salesfore Product Implementation</h3>
              <p>
              We help customers across industry verticals in redefining their sales, marketing and customer service experience using Salesforce products. We have certified and experienced team of Salesforce professionals who leverage extensive expertise in Salesforce configuration and customization to empower enterprises in their Technology Transformation journey.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <img src={Image2} alt="" />
              <h3>System Integration</h3>
              <p>
              Our team of Integration architects help our customers to get seamless connectivity between Salesforce and various legacy and home-grown systems, in real time as well as in batch mode. Data plays a crucial role and our experts assist our customers in accurately mapping it in the system to provide clear visibility into the business, leading to informed decision making.
              </p>
            </div>
            <div class="col-lg-6">
              <img src={Image2} alt="" />
              <h3>Support & Adoption</h3>
              <p>
              Adoption is the most important factor for the success of any implementation.

We have a dedicated team focused on support & training, which helps in driving system adoption. We support customer via various methodologies :
              </p>
              <ul>
                <li>SLA Based support</li>
                <li>Dedicated resource – T&M and Managed T&M model.</li>
                </ul>
                <p>We provide following sets of training to the customer’s team:</p>
                <ul>
                  <li>User training</li>
                  <li>Admin training</li>
                  <li> Module wise training</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-4" id="section3">
        <div class="container p-lg-3">
          <h1>Our Services</h1>
          <div class="row mt-5">
            <div class="col-lg-4">
              <div class="card ">
                <img src={Image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h2>Sales Cloud</h2>
                  <ul>
                    <li>Accelerate your business growth by selling smarter.</li>
                    <li>
                      Equip your sales team with a customer centric engagement
                      plan.
                    </li>
                    <li>
                      Keep deals moving forward with AI-powered sales tools.
                    </li>
                    <li>
                      Create a personalized sales journey for every customer.
                    </li>
                    <li>Increase the efficiency of the sales team.</li>
                    <li>Power the next generation of inside sales reps.</li>
                    <li>Convert you deals into cash at a faster pace.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card ">
                <img src={Image21} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h2>Service Cloud</h2>
                  <ul>
                    <li>Deliver personalized service.</li>
                    <li>
                      Manage cases, track histories, and more from one Lightning
                      console.
                    </li>
                    <li>Interact with customers in real time, 24/7.</li>
                    <li>
                      Help customers help themselves with self-service
                      communities.
                    </li>
                    <li>
                      Help agents to work smarter with easy access to shared
                      knowledge.
                    </li>
                    <li>Integrate customer support directly into your apps.</li>
                    <li>
                      Connect with field reps anywhere instantly with Field
                      Service Lightning.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <img src={Image22} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h2>Marketing Cloud</h2>
                  <ul>
                    <li>Engage with your customer with meaningful messages.</li>
                    <li>
                      Create end to end customer journeys which are personalized
                      and connected.
                    </li>
                    <li>
                      Engage smarter with the prospects via different channel.
                    </li>
                    <li>Enhance and track the marketing ROI.</li>
                    <li>AI powered marketing strategy.</li>
                    <li>Boast your sales with a strong pipeline.</li>
                    <li>Redefine your brand identity.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid" id="section5">
        <div class="container p-lg-3">
          <h1>Recent Projects</h1>
          <p class="mt-3">Some of the Recent Use Cases</p>
          <div class="row mt-3">
            <div class="col-lg-4">
              <div class="card shadow">
                <img src={Parks} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">ParksnParking</h5>
                  <p class="card-text">
                    Setting up the GTM Strategy
                    <br />
                    Structuring the customer acquisition process
                    <br />
                    Setting up CRM and customer service process
                    <br />
                    Backend Technology Setup Support and Training
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card shadow">
                <img src={Fortune} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Fortune Marketing Pvt Ltd</h5>
                  <p class="card-text">
                    Field force automation
                    <br />
                    PJP & Visit Planning
                    <br />
                    Call center management
                    <br />
                    Order Management
                    <br />
                    Reports & Dashboards
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card shadow">
                <img src={dentsu} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Dentsu</h5>
                  <p class="card-text">
                    System Optimization
                    <br />
                    Dedicated Pardot resource
                    <br />
                    Enhancements <br />
                    New Developments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-5 mb-5" id="section7">
        <div class="container">
          <h1>Field Force Management</h1>

          <div class="row">
            <div class="col-lg-8">
              <div class="row mt-3">
                <p class="mt-3">
                  A quick start implementation using Salesforce platform to
                  manage the field force in any retail or manufacturing scenario
                  operating on a channel framework. The time required for the
                  set up would be 6-8 weeks as per the requirements. The key
                  KPIs benchmarked as per the industry best practices
                </p>
                <div class="col-lg-4">
                  <i class="bx bxs-category"></i>
                  <h2>Journey Planning</h2>
                  <ul>
                    <li>Beat Plan & Activity Tracking</li>
                    <li> Engagement Map.</li>
                    <li>Geo tagging</li>
                    <li>SLA mapping </li>
                    <li>Visit management</li>
                    <li> Order Booking</li>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <i class="bx bx-merge"></i>
                  <h2>Performance Management</h2>
                  <ul>
                    <li>KPI Monitoring</li>
                    <li>Quota set up</li>
                    <li>Order</li>
                    <li>MIS</li>
                    <li>Expense</li>
                    <li>Leaves</li>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <i class="bx bx-braille"></i>
                  <h2>Customer Service</h2>
                  <ul>
                    <li>Complain Tracking</li>
                    <li>SLA</li>
                    <li>Escalation matrix</li>
                    <li>CTI Integration</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <img
                src={Mobile}
                class="img-fluid rounded shadow-lg"
                alt="Quadrafort"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Body;
