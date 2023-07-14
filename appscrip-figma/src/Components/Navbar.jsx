import React from 'react'
import styles from '../Styles/Navbar.module.css'
export const Navbar = () => {
    return (
        <div className={module.navDiv}>
            <div className={styles.logo}>LOGO</div>
            <div className={styles.content}>
                <div className={styles.navContent}>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Our Blog</p>
                    <p>Support</p>
                    <p>Affiliate</p>
                    <p>Program ~</p>
                </div>
                <div className={styles.loginDiv}>
                    <p>Login</p>
                    <p>Sign up</p>
                </div>
            </div>
        </div>
    )
}
