import { getMoviesByGenre } from "@/src/helper/utility";
import { useRouter } from "next/router";
import MovieList from "@/src/components/MovieList";
import styles from "@/styles/FilteredMovies.module.css";
import GoBackButton from "@/src/components/GoBackButton";

export default function FilteredMoviesPage({ movies }) {
  const router = useRouter(); 
  const genreName = router.query.id;

  return (
    <div className={styles.container}>
      <GoBackButton/>
      <h1 className={styles.heading}>Genre: {genreName}</h1>
      <MovieList movies={movies} baseURL={'/movies/'}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const movies = getMoviesByGenre(context.params.id);
  return {
    props: { movies },
  };
}
