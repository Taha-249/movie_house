import { getMoviesByGenre } from "@/src/helper/utility";
import { useRouter } from "next/router";
import MovieCard from "@/src/components/MovieCard";
import styles from "@/styles/FilteredMovies.module.css";
import Link from "next/link";

export default function FilteredMoviesPage({ movies }) {
  const router = useRouter(); 
  const genreName = router.query.id;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Genre: {genreName}</h1>
      <div className={styles.grid}>
        {movies?.map((movie) => (<Link href={'/movies/' + movie.id}><MovieCard key={movie.id} movie={movie} /></Link>))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const movies = getMoviesByGenre(context.params.id);
  return {
    props: { movies },
  };
}
