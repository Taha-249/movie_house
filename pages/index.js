import { useRouter } from "next/router";
import { getTrendingMovies } from "@/src/helper/utility";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import MovieList from "@/src/components/MovieList";

export default function Home({ movies }) {
  const router = useRouter();

  const gotoGenresPage = () => {
    router.push("/genres");
  };

  return (
    <>
      <Head>
        <title>Movie House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <h1 className={styles.heading}>Trending Movies</h1>
        <div className={styles.buttonContainer}>
          <button onClick={gotoGenresPage} className={styles.genreButton}>
            Browse Genres
          </button>
        </div>
        <MovieList movies={movies} baseURL={'/movies/'}/>
      </main>
    </>
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
