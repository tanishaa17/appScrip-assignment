import React from 'react'
import styles from '../Styles/Form.module.css'
import { FormButton } from './Buttons/FormButton'
export const Form = () => {
    return (
        <form action="" className={styles.form}>
            <div className={styles.googleSignUpBtn}>
                <img id='googleIcon' src="/assets/socials/google.png" alt="google" />
                <span>Continue with Google</span>
            </div>
            <img src="/assets/vectors/vector-full.png" alt="vector" />
            <input type="text" className={styles.nameInput} placeholder='First Name*' />
            <input type="text" className={styles.nameInput} placeholder='Last Name*' /> <br />
            <input type="text" className={styles.inputt} placeholder='Email*' /> <br />
            <input type="text" className={styles.inputt} placeholder='Password*' />
            <div className={styles.timeZone}>
                (GMT+05:30) india standard Time - Calcutta
                <img src="/assets/vectors/expand_more.png" alt="expand more" />
            </div>
            <FormButton color="#7426F2" text='Signup as a user' /> <br />
            <div className={styles.timeZone}>
                By signing up you agree to our Terms & Conditions and Privacy Policy. and confirm that you are at least 18 years old.
            </div>
            <div className={styles.or}>
                <img src="/assets/vectors/vector-half.png" alt="vector" />
                <p>or</p>
                <img src="/assets/vectors/vector-half.png" alt="vector" />
            </div>

            <FormButton text='Signup as a creator' color='#5D1C8E' /> <br />
            <div style={{ display: "block" }} className={styles.timeZone}>

                Already have an account? <span style={{ color: "#7421F4" }} >Login</span>
            </div>
        </form>
    )
}
