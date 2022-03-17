import styles from '../styles/Home.module.scss'
import AppHead from '../components/AppHead'
import Intro from '../components/Intro'

export default function Home() {
  return (
    <div className={styles.container}>
      <AppHead title="Technower - Home" description="Home page of technower." />
      <Intro />
    </div>
  )
}
