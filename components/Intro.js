import React from 'react'
import styles from '../styles/Intro.module.scss'
import sideImage from '../public/images/side_img.png';
import Image from 'next/image'
import Circle from './Circle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Intro = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="#fa0f26" width="90vmin" height="90vmin" opacity="0.1" top="-45vmin" left="-45vmin" />
            <Circle backgroundColor="#fa0f26" width="150vmin" height="150vmin" opacity="0.4" top="-22vmin" right="-87vmin" />
            <div className={styles.card}>
                <div className={styles.brandContainer}>
                    <div className={styles.title}>
                        <span className={styles.brand}>Technower </span>
                        <span className={styles.tagline}>- A Passel of Technophiles.</span>
                    </div>
                    <p className={styles.desc}>
                        Are you a knower of technology or wanna be the one? Join us and be the part of growing community of technowers.
                    </p>
                    <div>
                        <button className={styles.button}>Join<FontAwesomeIcon style={{ 'marginLeft': "5px" }} icon={faArrowRight} /></button>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <Image src={sideImage} alt="Technower image" className={'image'} />
                </div>
            </div>
        </div>
    )
}

export default Intro;