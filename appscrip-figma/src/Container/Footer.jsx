import React from 'react'
import styles from '../Styles/Footer.module.css'
import { facebook, instagram, twitter, youtube } from '../../public/assets/config'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.logo}>lOGO</div>
            <div className={styles.content}>
                <div className={styles.subContent}>
                    <p>Company</p>
                    <p className={styles.footerContent}>About</p>
                    <p className={styles.footerContent}>Support</p>
                    <p className={styles.footerContent}>Blog</p>
                    <p className={styles.footerContent}>Login</p>
                    <p className={styles.footerContent}>Sign up</p>
                    <p className={styles.footerContent}>Contact us</p>
                </div>
                <div className={styles.subContent}>
                    <p>Programs</p>
                    <p className={styles.footerContent}>Affiliate Program</p>
                    <p className={styles.footerContent}>Ambassador Program</p>
                    <p className={styles.footerContent}>Partnership Program</p>
                </div>
                <div className={styles.subContent}>
                    <p>Legal</p>
                    <p className={styles.footerContent}>DMCA</p>
                    <p className={styles.footerContent}>USC 2257</p>
                    <p className={styles.footerContent}>Privacy Policy</p>
                    <p className={styles.footerContent}>Terms and Conditions</p>
                </div>
            </div>
            <div className={styles.socials}>
                <p>Follow Us</p>
                <img className={styles.socialIcons} src={facebook} alt="facebook" />
                <img className={styles.socialIcons} src={twitter} alt="twitter" />
                <img className={styles.socialIcons} src={instagram} alt="instagram" />
                <img className={styles.socialIcons} src={youtube} alt="youtube" />
            </div>
        </div>
    )
}
