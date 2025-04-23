import { getMovies } from "@/src/helper/utility";
import Head from "next/head";
import MovieList from "@/src/components/MovieList";
import styles from "@/styles/Movies.module.css"; 
import GoBackButton from "@/src/components/GoBackButton";


export default function MoviesPage({ movies }) {
  
  return (
    <>
      <Head>
        <title>All Movies | Movie House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <GoBackButton/>
        <h1 className={styles.heading}>All Movies</h1>
        <MovieList movies={movies} baseURL={'/movies/'}/>
      </div>
    </>
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
