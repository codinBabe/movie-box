import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import tvshow from "../../assets/TV Show.svg";
import calendar from "../../assets/Calendar.svg";
import movie from "../../assets/Movie Projector.svg";
import home from "../../assets/Home.svg";
import logout from "../../assets/Logout.svg";
import Logo from "../Logo/Logo";
import styles from "./SideBar.module.css";
import { MdMenu, MdClose } from "react-icons/md";

const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        console.log('toggle');
        setSidebarOpen(!isSidebarOpen);
    };
    const sidebarItems = [
        { path: '/', label: 'Home', icon: home, active: false },
        { path: '/movies', label: 'Movies', icon: movie, active: true },
        { path: '/tvseries', label: 'Tv Series', icon: tvshow, active: false },
        { path: '/upcoming', label: 'Upcoming', icon: calendar, active: false },
    ];
    const customStyle = {
        '--logo-text-color': '333333',
        '--logo-font-weight': '700',
    };
    return (
        <aside className={styles.container}>
            <div className={styles.container_content}>
                <div>
                    <div className={styles.logo_container}>
                        <Logo customStyle={customStyle} />
                    </div>
                    <ul className={styles.sidebar_text}>
                        {sidebarItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    className={styles.link}
                                >
                                    <div className={`${styles.icons} ${styles.flex}`}>
                                        <div>
                                            <img src={item.icon} alt={`${item.icon}-icon`} />
                                        </div>
                                        <span className={styles.text}>
                                            {item.label}
                                        </span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.content}>
                    <h3>Play movie quizes
                        and earn
                        free tickets</h3>
                    <p>50k people are playing now</p>
                    <button>Start playing</button>
                </div>
                <div className={`${styles.flex} ${styles.logout_container}`}>
                    <div><img src={logout} alt={`${logout}-icon`} /></div>
                    <button className={`${styles.btn} ${styles.text}`}>Logout</button>
                </div>
            </div>
            <button onClick={toggleSidebar}>
                {isSidebarOpen ? <MdClose /> : <MdMenu />}
            </button>
        </aside>
    );
};

export default Sidebar;