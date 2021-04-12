import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./carrier.css";
import $ from "jquery";
import { motion } from "framer-motion";
function Carrier() {
  $(document).ready(function () {
    $(this).scrollTop(0);
  });
  function linkPage() {
    window.open(
      "https://www.linkedin.com/company/quadrafort-technologies-pvt-ltd",
      "_blank"
    );
  }
  const pageTransition = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "-100%",
    },
  };
  return (
    <>
      <div class="container-fluid" id="carrier1">
        <Header />
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={pageTransition}
          class="container"
        >
          <h1 class="mt-5"> Career</h1>
          <p>
            If you are an aggressive, go getter with a mind bend to excel in
            your domain, Quadrafort is the place for you. Join the team to make
            a mark for yourself and enjoy one of the best rewarding environments
            for Professional Excellence.
          </p>
        </motion.div>
      </div>
      <div class="action shadow-lg" onClick={linkPage}>
        <span></span>
      </div>
      <div class="container-fluid mt-4 mb-5" id="carrier2">
        <div class="container">
          <h1>
            Open <span>Vacancies</span>
          </h1>
          <div class="row mt-5">
            <div class="col-lg-6">
              <h3>Position: Salesforce Developers</h3>
              <h6>Location - Delhi/NCR No. of positions - 4</h6>
              <p>
                <span>Job Responsibilities:</span>
              </p>
              <ul>
                <li>
                  Design and implementation of solutions on Salesforce platform
                </li>
                <li>Integration of Salesforce with other systems.</li>
                <li>Manage and enhance existing system.</li>
              </ul>
              <p>
                <span>Minimum Requirements:</span>
              </p>
              <ul>
                <li>4+ years of experience in SFDC</li>
                <li>
                  Knowledge in Apex, with experience of working on Apex
                  trigger,controller, web services, callouts and batch classes.
                </li>
                <li>Experience in Lightning development ( LWC and Aura)</li>
                <li>
                  Experience in Salesforce integration with external systems
                  using apex.
                </li>
                <li>Experience in Service cloud and Community cloud.</li>
                <li>Experience in using a data loader.</li>
                <li>
                  Good knowledge about data sharing and access management.
                </li>
                <li>Good knowledge of Out of the box functionalities.</li>
                <li>Good understanding of the data model in Salesforce.</li>
                <li>
                  Good knowledge about standard practices in SFDC development.
                </li>
                <li>Knowledge about Salesforce limitations and solutions</li>
              </ul>
              <a href="mailto:info@quadrafort.com" class="btn">
                Send CV
              </a>
            </div>
            <div class="col-lg-6">
              <h3>Position: Salesforce Lightning Developers</h3>
              <h6>Location - Delhi/NCR/Bangalore No. of positions - 5</h6>
              <p>
                <span>Job Responsibilities:</span>
              </p>
              <ul>
                <li>
                  Design and implementation of solutions on Salesforce platform.
                </li>
                <li>Integration of Salesforce with other systems.</li>
                <li>Manage and enhance existing system.</li>
              </ul>
              <p>
                <span>Minimum Requirements:</span>
              </p>
              <ul>
                <li>4+ years of experience in SFDC</li>
                <li>Should have Salesforce Certifications (Admin/Advance)</li>
                <li>
                  Must have experience on web services, Lightning components or
                  LDS
                </li>
                <li>Must have experience in SFDC integrations</li>
                <li>
                  Must have experience in Salesforce developments and
                  administration with service
                </li>
                <li>
                  Must be able to define technical design and best practices
                  development plans, including other development and service
                  team(s) tasks, in a consolidated project plan
                </li>
                <li>
                  Must be able to design solutions with client management to
                  determine priorities and recommendations.
                </li>
                <li>
                  Must be able to design and develop solutions providing
                  documentation and support during testing
                </li>
                <li>
                  Must be able to conduct and lead SF architecture design
                  relating to assigned projects and complete development of
                  solutions.
                </li>
              </ul>
              <a href="mailto:info@quadrafort.com" class="btn">
                Send CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Carrier;
