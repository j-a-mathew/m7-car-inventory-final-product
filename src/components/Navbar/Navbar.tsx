import React from 'react';
import styles from '../../css/navstyle.module.css';
import { Link } from '@mui/material'

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.links}>
                <ul>
                    <li>
                        <Link href="/" underline="hover" color="success">Home</Link>
                    </li>
                    <li>
                        <Link href="/About" underline="hover" color="success">About</Link>
                    </li>
                    <li>
                        <Link href="/Contact" underline="hover" color="success">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
