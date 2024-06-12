import { API_URL } from "../(home)/page";
import styles from "../../styles/movie-info.module.css";

async function getMovie(id: string) {
    console.log(`Fetching movies ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`);
    const json = await response.json();
    return json;
}

export default async function MovieInfo({id}: {id: string}) {
    const movie = await getMovie(id);
    return (
    <div className={styles.container}>
        <img className={styles.poster} src={movie.poster_path} />
        <div className={styles.info}>
            <h1 className={styles.title}>{movie.title}</h1>
            <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
            <p>{movie.overview}</p>
            <a href={movie.homepage} target={"_blank"}>
                HomePage &rarr;
            </a>
        </div>
    </div>
        );
}