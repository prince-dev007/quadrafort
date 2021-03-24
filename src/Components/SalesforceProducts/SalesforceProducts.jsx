import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./sales.css";

function SalesforeProducts() {
  return (
    <>
      <Header />
      <div class="container-fluid" id="product1">
        <div class="container text-center">
          <h1 class="mt-5">
            Salesforce <span>Products</span> Offerings
          </h1>
          <p>
            We endeavour to empower organisations in their digital
            transformation journey with least disruption with emphasis on proper
            adoption, to aid in achieving complex business goals.
          </p>
          <button class="btn shadow mt-3">Get in touch</button>
        </div>
      </div>
      <div class="container-fluid mt-5" id="product2">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 p-lg-3">
              <h3>Sales Cloud</h3>
              <div class="content">
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
            <div class="col-lg-4 p-lg-3">
              <h3>Service Cloud</h3>
              <div class="content">
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
            <div class="col-lg-4 p-lg-3">
              <h3>Marketing Cloud</h3>
              <div class="content">
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
      <div class="container-fluid mt-3 mb-5" id="product3">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 p-lg-3">
              <h3>Community Cloud</h3>
              <div class="content">
                <ul>
                  <li>Personalized connect with your customers via customer</li>
                  <li>
                  Listen to your partners voice via partner community.
                  </li>
                  <li>
                  Drive employee satisfaction via self-service portals built on employee communities.
                  </li>
                  <li>
                  Build and publish lightening quick applications.
                  </li>
               
                </ul>
              </div>
            </div>
            <div class="col-lg-4 p-lg-3">
              <h3>Salesforce Platform</h3>
              <div class="content">
                <ul>
                  <li>Deliver personalized service.</li>
                  <li>
                  Create blazing fast business specific applications.
                  </li>
                  <li>Metadata driven architecture.</li>
                  <li>
                  Drag and drop workflows.
                  </li>
                  <li>
                  Create customer facing application using Heroku.
                  </li>
                  <li>Mobile, Vision, Blockchain, AI etc.</li>
                  <li>
                  Extend your CRM’s reach and functionality.
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 p-lg-3">
              <h3>Analytics</h3>
              <div class="content">
                <ul>
                  <li>Access your data across the enterprise.</li>
                  <li>
                  Create stories out of data.
                  </li>
                  <li>
                  Get the complete control of your business over your mobile.
                  </li>
             
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default SalesforeProducts;
