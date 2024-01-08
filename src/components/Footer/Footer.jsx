import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.social_links}>
                <a href="https://www.facebook.com" className={styles.social_icon}><img src={facebook} alt="facebookIcon" /></a>
                <a href="https://www.twitter.com" className={styles.social_icon}><img src={instagram} alt="instagramIcon" /></a>
                <a href="https://www.instagram.com" className={styles.social_icon}><img src={twitter} alt="twitterIcon" /></a>
                <a href="https://www.youtube.com" className={styles.social_icon}><img src={youtube} alt="youtubeIcon" /></a>
            </div>
            <div className={styles.social_links}>
                <a href="/terms" className={styles.legal_links}>Conditions of Use</a>
                <a href="/privacy" className={styles.legal_links}>Privacy & Policy</a>
                <a href="/press-room" className={styles.legal_links}>Press Room</a>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} MovieBox by Oluwatoyin
            </div>
        </div>
    )
};
export default Footer;