import React from 'react';
import { Navbar } from '../Navbar';
import styles from '../../css/homestyle.module.css';

export const Contact = () => {
    return (
        <div className={styles.background}>
            <Navbar />
            <div className={styles.mainText}>Contact me wherever you found this page!</div>
        </div>
    )
}
