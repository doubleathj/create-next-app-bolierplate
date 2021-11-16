import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>jun's nextjs page</title>
        <meta name="description" content="프로젝트 시작페이지" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Main
      </main>

      <footer className={styles.footer}>
        <div>
          test
        </div>    
      </footer>
    </div>
  )
}

export default Home
