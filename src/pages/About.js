import Navbar from "../components/NavBar"
import "../assets/css/About.css"
import coverPhoto from "../assets/images/cover.jpg"


const About = () => {
    return(
        <div className="about-page">
                <Navbar />
           <div className="about-container">
                <div className="about-header">
                    <h2>About Us</h2>
                </div>
                <div className="about-content">
                    <div className="about-image-container">
                        <img src={coverPhoto} alt="about us" />
                    </div>
                    <div className="about-text-container">
                        <p>
                        TWEN helps you to build amazing websites with top-notch experts.
We are a fully remote digital agency focusing on branding, marketing, web design, and development with clients ranging from start-ups.
                        </p>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default About;