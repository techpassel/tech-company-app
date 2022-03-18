import styles from '../styles/Home.module.scss'
import AppHead from '../components/AppHead'
import Intro from '../components/Intro'
import Info from '../components/Info'
import { data } from '../data'
import Service from '../components/Service'

export default function Home({ services }) {
  return (
    <div className={styles.container}>
      <AppHead title="Technower - Home" description="Home page of technower." />
      <Intro />
      <Info />
      <Service services={services} />
    </div>
  )
}

export const getStaticProps = async () => {
  // const services = await Axios
  const services = data;
  return {
    props: { services }
  }
}