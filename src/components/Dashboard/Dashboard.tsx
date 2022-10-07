import React from 'react';
import { Navbar } from '../Navbar'
import { DataTable } from '../DataTable';
import styles from '../../css/dashboardstyle.module.css';

export const Dashboard = () => {
    return (
        <div className={styles.background}>
            <Navbar />
            <div>
                <h2>My Car Inventory Dashboard</h2>
                <div className={styles.table}><DataTable></DataTable></div>
            </div>
        </div>
    )
}
