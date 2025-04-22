import MovieCard from "@/src/components/MovieCard";
import { getMovies } from "@/src/helper/utility";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/Movies.module.css"; 

export default function MoviesPage({ movies }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>All Movies</h1>
      <div className={styles.grid}>
        {movies?.map((movie) => (
          <Link key={movie.id} href={'/movies/' + movie.id}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const Movies = getMovies();
  if (!Movies)
    return {
      notFound: true,
    };

  return {
    props: {
      movies: Movies,
    },
    revalidate: 86400,
  };
}
