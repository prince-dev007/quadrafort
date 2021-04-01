import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./about.css";
function About() {
  return (
    <>
      <div class="container-fluid" id="aboutSection1">
        <Header />
        <div class="container">
          <div class="row">
            <div class="col-lg-6 p-lg-3">
              <h1>
                About the <span>Company</span>
              </h1>
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
              <p>
                We work across industries encompassing manufacturing, retail,
                hi-tech, government, IT, NBFC, Fintech and Media.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-5 mb-5" id="aboutSection2">
        <h1>What we do?</h1>
        <div class="row text-center mt-5">
          <div class="col-lg-2 offset-1 p-lg-2">
            <i class="bx bxl-react"></i>
            <h3>Customer Relationship Management</h3>
            <p>
              End to End Implementation, Consulting, Migration & Integration.{" "}
            </p>
          </div>
          <div class="col-lg-2 p-lg-2">
            <i class="bx bxs-category-alt"></i>
            <h3>Business Intelligence & Advanced Analytics</h3>
            <p>
              Data Analytics, Visualization, Advanced Analytics, Data Science{" "}
            </p>
          </div>
          <div class="col-lg-2 p-lg-2">
            <i class="bx bx-shape-polygon"></i>
            <h3>
              Business Process <br />
              Engines
            </h3>
            <p>Custom Application Development, Process Builder, Workflows </p>
          </div>
          <div class="col-lg-2 p-lg-2">
            <i class="bx bx-border-inner"></i>
            <h3>
              Digital <br />
              Transformation{" "}
            </h3>
            <p>Website, Content writing, Digital Marketing</p>
          </div>
          <div class="col-lg-2 p-lg-2">
            <i class="bx bxs-book-reader"></i>
            <h3>
              Training <br />
              Services
            </h3>
            <p>Salesforce, SAP, Qlik, Power BI</p>
          </div>
        </div>
      </div>
      <div class="container-fluid mb-5" id="aboutSection3">
        <h1>Quadrafort Excellence Framework</h1>
        <div class="container">
          <div class="row mt-5">
            <div class="col-lg-4">
              <h2>Quality</h2>
              <ul>
                <li>We are paranoid about the quality.</li>
                <li>
                  We have QMS systems to govern product and process related
                  quality quality for the deliverables.
                </li>
                <li>We are ardent follower of Kaizen Approach</li>
              </ul>
            </div>
            <div class="col-lg-4">
              <h2>Excellence </h2>
              <ul>
                <li>
                  <span>Partner Excellence – </span> Working with the domain
                  leaders
                </li>
                <li>
                  <span>Resource Excellence – </span> Defined L&D framework with
                  governance module
                </li>
                <li>
                  <span>Resource Excellence – </span> Defined L&D framework with
                  governance module
                </li>
                <li>
                  <span>Customer Excellence – </span> Separate team of
                  engagement managers to drive customer satisfaction{" "}
                </li>
              </ul>
            </div>
            <div class="col-lg-4">
              <h2>Focus</h2>
              <ul>
                <li>
                  We have focused approach for different regions, industry and
                  product portfolio.
                </li>
                <li>
                  We curate the strategy basis the intrinsic and extrinsic
                  governing factors, henceforth deriving a curated solution for
                  the customer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default About;
