import React from 'react';
import { Navbar } from '../Navbar';
import styles from '../../css/homestyle.module.css';

export const About = () => {
    return (
        <div className={styles.background}>
            <Navbar />
            <div className={styles.mainText}>Hello, this Car Inventory App was made by Justin Mathew!</div>
        </div>
    )
}
