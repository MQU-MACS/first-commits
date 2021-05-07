import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CommitList from '../components/CommitList'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>First Commits</title>
        <meta name="description" content="Website displaying the names of first commiters" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"/> 
      </Head>

      <CommitList names={props.names}/>
    </div>
  )
}
