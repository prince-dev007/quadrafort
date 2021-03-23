import Header from "../Header/Header";
import "../Assests/css/Style.css";
import Salesfore from "../Assests/img/0_fcNjCdBDJ3fy9Kqt.png";
import Logo from "../Assests/img/text.svg";
import Image from "../Assests/img/christian-wiediger-WkfDrhxDMC8-unsplash.jpg";
import Image2 from "../Assests/img/process.png";
import Image3 from "../Assests/img/jo-szczepanska-5aiRb5f464A-unsplash.jpg";
import Footer from "../Footer/Footer";
function Body() {
  return (
    <>
      <Header />
      <div class="container-fluid " id="section1">
        <div class="container animate__animated animate__fadeInUp ">
          <br />
          <img
            class="animate__animated animate__bounce"
            src={Salesfore}
            height="100px"
            alt=""
          />
          <h1>
            WE ARE HERE TO HELP YOU WITH <br /> QUALITY , FOCUS & EXCELLENCE
          </h1>
          <p>
            Assist our customers in enhancing Productivity and bussiness
            efficiency.
          </p>
          <button class="btn">Consult Us</button>
        </div>
      </div>
      <div class="container-fluid mt-5" id="section2">
        <h1>About Quadrafort</h1>
        <div class="row mt-5 p-lg-5">
          <div class="col-lg-6">
            <img src={Logo} class="img-fluid" alt="" />
          </div>
          <div class="col-lg-6 p-lg-5">
            <h2>WHO WE ARE ?</h2>
            <h3>Get to know about our company</h3>
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
            <button class="btn">Read More</button>
          </div>
        </div>
      </div>
      <div class="container-fluid" id="section3">
        <div class="container">
          <h1>Services</h1>
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
                <img src={Image} class="card-img-top" alt="..." />
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
                <img src={Image} class="card-img-top" alt="..." />
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
      <div class="container-fluid mt-5" id="section4">
        <div class="container p-lg-5">
          <h1>Our Consulting Service</h1>
          <br />
          <p>
            The rise of mobile devices transform the way we consume information
            entriely.
          </p>
          <div class="row">
            <div class="col-lg-6">
              <img src={Image2} alt="" />
              <h3>Process Consulting</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores omnis illum unde, atque fugit quasi? Nemo enim
                placeat neque, labore veritatis eius sunt? Amet libero
                consequatur, tempore laudantium id rem.
              </p>
            </div>
            <div class="col-lg-6">
              <img src={Image2} alt="" />
              <h3>Salesfore Product Implementation</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                ut quis quia quisquam itaque quos, sint assumenda soluta
                nesciunt, est, suscipit officiis obcaecati consequuntur
                sapiente? Laborum iure aliquam nihil deserunt?
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <img src={Image2} alt="" />
              <h3>System Integration</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores omnis illum unde, atque fugit quasi? Nemo enim
                placeat neque, labore veritatis eius sunt? Amet libero
                consequatur, tempore laudantium id rem.
              </p>
            </div>
            <div class="col-lg-6">
              <img src={Image2} alt="" />
              <h3>Support & Adoption</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                ut quis quia quisquam itaque quos, sint assumenda soluta
                nesciunt, est, suscipit officiis obcaecati consequuntur
                sapiente? Laborum iure aliquam nihil deserunt?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid" id="section5">
        <div class="container p-lg-5">
          <h1>Best Projects</h1>
          <div class="row mt-5">
            <div class="col-lg-4">
              <div class="card">
                <img src={Image3} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#Quadrafort" class="btn ">
                  Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
       
              <div class="card">
                <img src={Image3} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#Quadrafort" class="btn ">
                  Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
  
              <div class="card">
                <img src={Image3} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#Quadrafort" class="btn ">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <Footer/>
    </>
  );
}
export default Body;
