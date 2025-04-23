import { getGenreById, getMoviesByGenre } from "@/src/helper/utility";
import MovieList from "@/src/components/MovieList";
import styles from "@/styles/FilteredMovies.module.css";
import GoBackButton from "@/src/components/GoBackButton";
import Head from "next/head";

export default function FilteredMoviesPage({ movies, genreName }) {
  
  return (
    <>
      <Head>
        <title>{genreName} | Movie House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <GoBackButton/>
        <h1 className={styles.heading}>Genre: {genreName}</h1>
        <MovieList movies={movies} baseURL={'/movies/'}/>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const movies = getMoviesByGenre(context.params.id);
  const genreName = getGenreById(context.params.id).name;
  return {
    props: { movies, genreName },
  };
}
