import React from 'react'
import styles from '../Styles/Navbar.module.css'
import { Button } from './Button'
export const Navbar = () => {
    return (
        <div className={styles.navDiv}>
            <div className={styles.logo}>lOGO</div>
            <div className={styles.heading}>
                <div className={styles.navContent}>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Our Blog</p>
                    <p>Support</p>
                    <p>Affiliate</p>
                    <select id='select'>
                        <option value="">Program</option>
                    </select>
                </div>
                <div className={styles.loginDiv}>
                    <p>Login</p>
                    <Button text='Sign up' />
                </div>
            </div>
        </div>
    )
}
