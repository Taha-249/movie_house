import GoBackButton from "@/src/components/GoBackButton";
import Loading from "@/src/components/Loading";
import { getDirectorByMovieId } from "@/src/helper/utility";
import styles from '@/styles/DirectorInformationPage.module.css';
import Head from "next/head";

export default function DirectorInformationPage({ director }) {
  if (!director) return <Loading />;

  return (
    <>
      <Head>
        <title>{director.name} | Movie House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <GoBackButton/>
        <h1 className={styles.title}>Director Information</h1>
        <div className={styles.directorInfo}>
          <h3 className={styles.name}>{director.name}</h3>
          <p className={styles.biography}>{director.biography}</p>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const director = getDirectorByMovieId(id);

  return {
    props: { director },
  };
}
