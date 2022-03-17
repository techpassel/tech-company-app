import React from 'react'
import styles from '../styles/Intro.module.scss'
// import side_image from '../public/images/undraw_collaborators_re_hont.svg'
import sideImage from '../public/images/side_img.png';
import Image from 'next/image'

const Intro = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.firstCard}>
                    <div className={styles.title}>
                        <span className={styles.brand}>Technower </span>
                        <span className={styles.tagline}>- A Passel of Technophiles.</span>
                    </div>
                    <p className={styles.desc}>
                        Are you a knower of technology or wanna be the one? Join us and be the part of growing community of technowers.
                    </p>
                    <div><button className={styles.button}>Join</button></div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.secondCard}>
                    <Image src={sideImage} alt="Technower image" />
                </div>
            </div>
        </div>
    )
}

export default Intro;