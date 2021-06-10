import React from 'react';
import "./footer.css"

const Footer = () => {
    return ( <div className="footer-wrapper">
        <div className="footer">
            <div className="footer-item">
                <h3 className="heading">edyoda</h3>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
                <a href="#">Terms of Use</a>
                <a href="#">Privacy Policy</a>
            </div>
            <div className="footer-item">
                <h3 className="heading">resources</h3>
                <a href="#">Courses</a>
                <a href="#">Learning Videos</a>
                <a href="#">Educators</a>
                <a href="#">Edyoda Stories</a>
                <a href="#">University</a>
            </div>
            <div className="footer-item">
                <h3 className="heading">for enterprises</h3>
                <a href="#">Train Your Employees</a>
                <h3 className="heading">quick links</h3>
                <a href="#">Learn and Earn</a>
                <a href="#">Become a Learning-Enabler</a>
                <a href="#">Tips for Learning-Enabler</a>
                <a href="#">Request New Topic</a>               
            </div>
            <div className="footer-item">
                <h3 className="heading">connect</h3>
                <a href="#" className="address">
                    2nd Floor #188, Survey No. - 123/1,<br/>
                    Incubes Building Next to McDonalds,<br/>
                    ITPL Main Rd, Brookefield,<br/>
                    Bengaluru, Karnataka-560037,<br/>
                    India
                </a>
                <a href="mailto:hello@edyoda.com">
                    <i className="fas fa-envelope icon" style={{position: "relative",bottom: "-3px"}}></i>hello@edyoda.com
                </a>
                <div className="social-icon-Wrapper">
                    <i className="fas fa-map-marker-alt icon"></i>
                    <i className="fab fa-twitter icon"></i>
                    <i className="fab fa-facebook-f icon"></i>
                    <i className="fab fa-linkedin-in icon"></i>
                </div>
                <a href="#">&copy;2021<br/>zekeLabs Technologies Private Limited</a>              
            </div>
        </div>
    </div> );
}
 
export default Footer;