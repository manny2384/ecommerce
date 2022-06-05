// social media icons
import twitter from '../assets/shared/desktop/icon-twitter.svg';
import facebook from '../assets/shared/desktop/icon-facebook.svg';
import instagram from '../assets/shared/desktop/icon-instagram.svg';

function Footer(props){
    return(<div className="footer">
        <div className="footer-branding">
            <img src={props.logo} alt="brand" />

            <div className="footer-nav">
                <ul>
                    <li> HOME </li>
                    <li> HEADPHONES </li>
                    <li> SPEAKERS </li>
                    <li> EARPHONES </li>
                </ul>
            </div>
        </div>

        <div className="footer-desc">
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
        and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
        visit our demo facility - we’re open 7 days a week.
        </div>
        <div className='footer-tags'>
            <div className="copyrights"> Copyright 2021. All Rights Reserved </div>
            <div className="socialMedia">
                <img src={facebook} alt="facebookicon" />
                <img src={twitter} alt="twittericon" />
                <img src={instagram} alt="instagramicon" />
            </div>
        </div>
    </div>)
}

export default Footer;