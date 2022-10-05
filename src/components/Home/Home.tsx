import React from 'react';
import styles from '../../css/homestyle.module.css';
import { Navbar } from '../Navbar'

interface Props {
    title: string;
}

export const Home = ( props: Props ) => {
    return (
        <>
            <Navbar />
            <div className={styles.background}>
                <div className={styles.mainText}>
                    <h1>{props.title}</h1>
                    <div className={styles.logo}></div>
                </div>
            </div>
        </>
    )
}

