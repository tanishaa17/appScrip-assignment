import React from 'react';
import styles from '../Styles/Header.module.css';
import { Form } from '@/Components/Form';

export const Header = () => {
    return (
        <div className={styles.headers}>
            <div className={styles.backgroundImage} />
            <div className={styles.headingDiv}>
                <span className={styles.heading}>A Creator's Paradise</span>
                <span className={styles.subHeading}>Were Creativity Meets Success</span>
            </div>
            <div className={styles.formContainer}>
                <Form />
            </div>
        </div>
    );
};
