import Logo from "../components/Logo/Logo";
import Menu from "../components/Menu/Menu";
import next from "../assets/next.svg";
import { Link } from "react-router-dom";
import PosterDetails from "../components/Poster/PosterDetails";
import styles from "./styles/HomePage.module.css";
import Search from "../components/Search/Search";
import Datas from "../components/utils/Data";
import MovieCard from "../components/MovieCard/MovieCard";
import Footer from "../components/Footer/Footer";


function HomePage() {
    const randomData = Math.floor(Math.random() * 5);
    const moviePoster = Datas.results[randomData];
    const movie_Background = "https://image.tmdb.org/t/p/original/" + Datas.results[randomData].backdrop_path;
    const dataLimit = Datas.results.slice(0, 10);


    function updateMovieCard(data) {
        return (
            <Link to={`/movies/${data.id}`} key={data.id} className={styles.link}>
                <MovieCard
                    key={data.id}
                    backdrop_path={data.backdrop_path}
                    release_date={data.release_date}
                    title={data.title}
                    vote_count={data.vote_count}
                    vote_average={data.vote_average}
                    genre_ids={data.genre_ids}
                />
            </Link>
        )
    }

    return (
        <>
            <section className={styles.section} style={{ backgroundImage: `url(${movie_Background})` }}>
                <header className={styles.header}>
                    <Logo />
                    <Search />
                    <Menu />
                </header>
                <PosterDetails title={moviePoster.title}
                    vote_count={moviePoster.vote_count}
                    vote_average={moviePoster.vote_average}
                    overview={moviePoster.overview} />
            </section>
            <main className={styles.main}>
                <div className={styles.heading_container}>
                    <h2 className={styles.heading}>Featured Movie</h2>
                    <a className={styles.more} href="/">see more <span><img src={next} alt="nextBtn" /></span></a>
                </div>
                <section className={styles.movie_grid}>
                    {dataLimit.map(updateMovieCard)}
                </section>
            </main>
            <footer>
                <Footer />
            </footer>

        </>
    );
}
export default HomePage;
