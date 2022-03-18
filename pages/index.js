import styles from '../styles/Home.module.scss'
import AppHead from '../components/AppHead'
import Intro from '../components/Intro'
import Info from '../components/Info'

export default function Home() {
  return (
    <div className={styles.container}>
      <AppHead title="Technower - Home" description="Home page of technower." />
      <Intro />
      <Info />
    </div>
  )
}
