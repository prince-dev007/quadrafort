import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './about.css';
function About(){
    return(
        <>
            <Header/>
            <div class="container-fluid" id="aboutSection1">
                <div class="container">
                        <div class="row">
                            <div class="col-lg-6 p-lg-3">
                                <h1>About the <span>Company</span></h1>
                                <p>We at Quadrafort assist our customers in enhancing Productivity and Business efficiency achieved by our best in class Cloud Solutions and innovative 360° consulting services. We are an end-to-end Salesforce services provider assisted by a team of certified technologists aided by domain experience & proficiency garnered across industries and business verticals.</p>
                                <p>We endeavour to empower organisations in their digital transformation journey with least disruption with emphasis on proper adoption, to aid in achieving complex business goals.</p>
                                <p>We work across industries encompassing manufacturing, retail, hi-tech, government, IT, NBFC, Fintech and Media.</p>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="container-fluid mt-3" id="aboutSection2">
                    <div class="container p-lg-5">
                        <h1>Quadrafort Excellence <span>Framework</span></h1>
                            <div class="row mt-5">
                                <div class="col-lg-4">
                                        <h3>Quality</h3>
                                        <ul>
                                            <li>Paranoid about Quality.</li>
                                            <li>Strictly adhere to all dimensions of SERVQUAL model.</li>
                                            <li>QMS System to govern product & process related quality for deliverables.</li>
                                            <li>Ardent follower of Kaizen.</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-4">
                                            <h3>Excellence</h3>
                                            <ul>
                                                <li>Partner Excellence – Work with Technology Leaders in each domain.</li>
                                                <li>Resource Excellence – Pick the best talent and enhance the expertise by L&D framework with governance.</li>
                                                <li>Delivery Excellence – Certified teams following Agile delivery methodology.</li>
                                                <li>Customer Excellence – Engagement managers for each project to achieve ultimate customer satisfaction.</li>
                                                </ul>
                                    </div>
                                    <div class="col-lg-4">
                                        <h3>Focus</h3>
                                        <ul>
                                            <li>Avid follower of Blue Ocean strategy focusing on Tier 2 cities.</li>
                                            <li>Focused approach towards various regions, industries and market segments.</li>
                                            <li>Strategize a unique solution with data from various intrinsic and extrinsic governing factors.</li>
                                            </ul>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <Footer/>
        </>

    )
}
export default About;