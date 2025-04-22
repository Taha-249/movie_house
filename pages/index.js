import { useRouter } from "next/router";
import { getTrendingMovies } from "@/src/helper/utility";
import MovieCard from "@/src/components/MovieCard";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home({ movies }) {
  const router = useRouter();

  const gotoGenresPage = () => {
    router.push("/genres");
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Trending Movies</h1>

      <section className={styles.grid}>
        {movies?.map((movie) => (
          <Link key={movie.id} href={'/movies/' + movie.id}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </section>

      <div className={styles.buttonContainer}>
        <button onClick={gotoGenresPage} className={styles.genreButton}>
          Browse Genres
        </button>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const trendingMovies = getTrendingMovies();
  return {
    props: {
      movies: trendingMovies,
    },
    revalidate: 86400,
  };
}
