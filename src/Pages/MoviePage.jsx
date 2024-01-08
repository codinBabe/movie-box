import Sidebar from "../components/SideBar/SideBar";
import styles from "./styles/MoviePage.module.css";
const Moviepage = () => {
    return (
        <main>
            <Sidebar />
            <div className={styles.movie_container}>
                <h1>Movie Trailer</h1>
                {/* Add your movie trailer component here */}
                <h2>Cast</h2>
                {/* Add cast information here */}
                <h2>Movie Overview</h2>
                {/* Add movie overview content here */}
            </div>
        </main>
    )
}
export default Moviepage;