import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './contact.css';

function Contact(){
    return(
        <>

            <div class="container-fluid" id="contact1">
            <Header/>
                <div class="container">
                    <h1><span>Contact</span> Us</h1>
                    <p>If you are an aggressive, go getter with a mind bend to excel in your domain, Quadrafort is the place for you.

Join the team to make a mark for yourself and enjoy one of the best rewarding environments for Professional Excellence.</p>
                </div>
            </div>
            <div class="container-fliud mt-5" id="contact2">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 p-lg-5">
                                <h2><span>Email</span></h2>
                                <p>Feel free to mail us.!!</p>
                                <h4>Info@quadrafort.com</h4>
                                <h2><span>Location</span></h2>
                                <p>Regd Office - 3/15, East Patel Nagar, New Delhi - 110008,India</p>
                                <h4>View on Google Maps</h4>
                            </div>
                            <div class="col-lg-6 p-lg-5">
                                <form>
                                <div class="form-group">
                                    <label>Enter your Full Name</label>
                                    <input type="text" class="form-control" required placeholder="Enter your Full Name"/>
                                </div>
                                <div class="form-group">
                                    <label>Enter your Email Address</label>
                                    <input type="text" class="form-control" required placeholder="Enter your Email Address"/>
                                </div>
                                <div class="form-group">
                                    <label>Enter your Message</label>
                                    <textarea rows="4" type="text" required class="form-control" placeholder="Enter your Email Address"/>
                                </div>
                                <button type="submit" class="btn">Send Message</button>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contact;