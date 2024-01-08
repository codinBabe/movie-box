import styles from "./Logo.module.css";
import PropTypes from 'prop-types';
import tv from "../../assets/tv.svg";


const Logo = ({ customStyle }) => {
    const logoStyle = {
        ...customStyle, // Use the provided text color
    };

    return (
        <div className={`${styles.logo} ${styles.customColor}`} style={logoStyle}>
            <a href="/">
                <img src={tv} alt="" />
                MovieBox
            </a>
        </div>
    );
};

Logo.propTypes = {
    customStyle: PropTypes.object, // Accept a text color as a prop
};

// const Logo = () => {
//     return (
//         <div className={styles.logo}>
//             <a href="/"><img src={tv} alt="" />MovieBox</a>
//         </div>
//     )
// }
export default Logo;