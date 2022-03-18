import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from '../styles/Info.module.scss'

const Services = () => {
    return (
        <div className={styles.container}>
            <hr className={styles.hrBorder} />
            <h1 className={styles.title}>Who we are!</h1>
            <p className={styles.details}>Technower is a collaboration platform for technophiles. It is a platform where
                technowers collaborate together to make the learning and understanding of latest
                technologies easy and accessible for everyone. They use this platform to share
                their knowledge and skill with the world and to excel their skills by grabing
                the knowledge shared by fellow technowers. They also use this platform for getting
                assistance from the fellow technowers in the time of need and for many other purposes.
            </p>
            <button className={styles.button}>Learn more
                <FontAwesomeIcon style={{ 'marginLeft': "5px" }} icon={faArrowRight} />
            </button>
            <hr className={styles.hrBorder} />
        </div>
    )
}

export default Services