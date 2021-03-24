import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sales from '../Assests/img/sales.png'
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
            <img  src={Sales} alt="Quadrafort" class="img-fluid"/>
              <h3>
                <span>Sales Cloud</span>
              </h3>
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
            <img  src={Sales} alt="Quadrafort" class="img-fluid"/>
              <h3>
                <span>Service Cloud</span>
              </h3>
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
            <img  src={Sales} alt="Quadrafort" class="img-fluid"/>
              <h3>
                <span>Marketing Cloud</span>
              </h3>
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
            <img  src={Sales} alt="Quadrafort" class="img-fluid"/>
              <h3>
                <span>Community Cloud</span>
              </h3>
              <div class="content">
                <ul>
                  <li>Personalized connect with your customers via customer</li>
                  <li>Listen to your partners voice via partner community.</li>
                  <li>
                    Drive employee satisfaction via self-service portals built
                    on employee communities.
                  </li>
                  <li>Build and publish lightening quick applications.</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 p-lg-3">
            <img  src={Sales} alt="Quadrafort" class="img-fluid"/>
              <h3>
                <span>Salesforce Platform</span>
              </h3>
              <div class="content">
                <ul>
                  <li>Deliver personalized service.</li>
                  <li>Create blazing fast business specific applications.</li>
                  <li>Metadata driven architecture.</li>
                  <li>Drag and drop workflows.</li>
                  <li>Create customer facing application using Heroku.</li>
                  <li>Mobile, Vision, Blockchain, AI etc.</li>
                  <li>Extend your CRM’s reach and functionality.</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 p-lg-3">
            <img  src={Sales} alt="Quadrafort" class="img-fluid"/>
              <h3>
                <span>Analytics</span>
              </h3>
              <div class="content">
                <ul>
                  <li>Access your data across the enterprise.</li>
                  <li>Create stories out of data.</li>
                  <li>
                    Get the complete control of your business over your mobile.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mb-5" id="product4">
        <div class="container">
          <h1>
            Our <span>Consulting</span> Services
          </h1>
          <div class="row mt-5">
            <div class="col-lg-4">
            <img  src={Sales} alt="Quadrafort" class="img-fluid"/>
              <h3>Process Consulting</h3>
              <p>
                Our highly valued Consulting services expertise, across
                industries, empower our customers in their Business Automation &
                Business Process optimisation goals.If one or more of the above
                questions you just read has “Yes” as an answer, then it’s time
                to engage our services. Whatever the problem is, it is of utmost
                importance to find the right solution. Get expert advice from
                our process consultants.
              </p>
            </div>
            <div class="col-lg-4">
            <img  src={Sales} alt="Quadrafort" class="img-fluid"/>
              <h3>Salesforce Product Implementation</h3>
              <p>
                We help customers across industry verticals in redefining their
                sales, marketing and customer service experience using
                Salesforce products.We have certified and experienced team of
                Salesforce professionals who leverage extensive expertise in
                Salesforce configuration and customization to empower
                enterprises in their digital transformation journey.
              </p>
            </div>
            <div class="col-lg-4">
            <img  src={Sales} alt="Quadrafort" class="img-fluid"/>
              <h3>System Integration</h3>
              <p>
                Our team of Integration architects help our customers to get
                seamless connectivity between Salesforce and various legacy and
                home-grown systems, in real time as well as batch mode.Data
                plays a crucial role and our experts assist our customers in
                accurately mapping it in the system to provide clear visibility
                into the business, leading to informed decision making.
              </p>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-lg-4">
            <img  src={Sales} alt="Quadrafort" class="img-fluid"/>
              <h3>Audit & Optimization</h3>
              <p>
                Our team of technical architects helps enterprises in assessing
                their current architecture and defining the optimized
                transformation strategy.The audit is backed up by an exhaustive
                report and the recommendation and plan to optimize the current
                setup on the process as well as architecture level.
              </p>
            </div>
            <div class="col-lg-4">
            <img  src={Sales} alt="Quadrafort" class="img-fluid"/>
              <h3>Support & Adoption</h3>
              <p>
                The success of any implementation depends on its adoption. We
                have a dedicated team engaged in support & training, which helps
                in driving system adoption.We support customer via following
                methodologies:
              </p>
              <ul class="ml-4">
                <li>SLA Based support</li>
                <li>
                  Dedicated resource – T&M model We provide following sets of
                  training to the customer’s team:
                </li>
                <li>User training</li>
                <li>Admin training</li>
                <li>Module wise training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SalesforeProducts;
