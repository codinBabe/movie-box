import styles from "./Menu.module.css";
import menu from "../../assets/Menu.svg";
const Menu = () => {
    return (
        <div className={styles.signIn}>
            <a href="#">Sign in</a>
            <button className={styles.btn}><img src={menu} /></button>
        </div>
    )
}
export default Menu;