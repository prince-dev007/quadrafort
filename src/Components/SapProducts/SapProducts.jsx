import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sap1 from '../Assests/img/S4HANA-cloud-logo-webcast-replay-blog-feature.jpeg'
import Sap2 from '../Assests/img/SAP-Cloud-Platform-1-1024x614.png'
import Sap3 from '../Assests/img/sap3.png'
import Sap4 from '../Assests/img/SAP_Ariba_horz_R_pos_blugld.png'
import Sap5 from '../Assests/img/SAP-BusinessObjects.png'
import Sap6 from '../Assests/img/download.jpeg'
import Sap7 from '../Assests/img/sap-successfactors-review_gzvw.jpeg'
import SAP_logo from "../Assests/img/SAP_logo.png";
import './sap.css'
function SapProducts() {
    return(
        <>  
            <div class="container-fluid" id="sap1">
                <Header/>
                <div class="container text-center">
                    <img src={SAP_logo} class="img-fluid"/>
                    <h1>Business Engagement Model</h1>
                    <p>We operate a customer-centric business model focused on specific market segments with national representation through a direct channel. We employ dedicated key account management teams per leading industry sector thereby providing strategic clients, with specialist knowledge and expertise.  </p>
                    <button class="btn shadow-lg">Get in touch</button>
                </div>
            </div>
            <div class="container-fluid mt-5" id="sap2">
                <div class="container p-lg-3">
                    <h1>More about <span>Business Engagement Model</span></h1>
                    <p>We understand the enabling effect of People, Process and Technology on business being critical to crafting and implementing sound business solutions. Quadrafort Technologies also manages and drives the implementation of solutions to ensure and guarantee success through tested and industry aligned methodologies and frameworks. A key element of our approach especially regarding our customer engagements is leveraging existing technology investments wherever possible, maximising synergies across the enterprise, and is based on the principles of standardisation, consolidation, optimization and therefore sustainability by effective cost saving.  </p>        
                </div>
                </div>
            <div class="container-fluid mb-5" id="sap3">
                <div class="container p-lg-3">
                    <h1><span>SAP Offerings</span></h1>
                    <div class="row mt-3 p-lg-4">
                        <div class="col-lg-4">
                            <img src={Sap1} height="50xp" alt="Quadrafort" />
                            </div>
                            <div class="col-lg-4">
                            <img src={Sap2} height="50xp" alt="Quadrafort" />
                            </div>
                            <div class="col-lg-4">
                            <img src={Sap3} height="50xp" alt="Quadrafort" />
                            </div>
                        </div>
                        <div class="row mt-2 p-lg-4">
                        <div class="col-lg-4">
                        <img src={Sap4} height="50xp" alt="Quadrafort" />
                            </div>
                            <div class="col-lg-4">
                            <img src={Sap5} height="50xp" alt="Quadrafort" />
                            </div>
                            <div class="col-lg-4">
                            <img src={Sap6} height="50xp" alt="Quadrafort" />
                            </div>
                        </div>
                        <div class="row mt-2 p-lg-4">
                        <div class="col-lg-4">
                        <img src={Sap7} height="50xp" alt="Quadrafort" />
                            </div>
                            
                        </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SapProducts;