import React from 'react'
import styles from '../Styles/Main.module.css'
export const Main = () => {
    return (
        <div className={styles.mainDiv}>
            <p>Elevate Your Craft</p>
            <div className={styles.box1}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.box2}></div>
            <div className={styles.box3}></div>
            <div className={styles.box4}></div>
            <div className={styles.box5}></div>
        </div>
    )
}
