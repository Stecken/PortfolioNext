import React, { useEffect, useState } from 'react';
import styles from '../styles/components/Footer.module.css';
import { useRouter } from 'next/router'

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFacebookSquare, FaHome, FaCode, FaEnvelope, FaUserAlt, FaBars } from 'react-icons/fa';

export function FooterPages(...props) {
    return(
        <div className={styles.Completa}>
            <div >
                <a href="https://github.com/stecken"><FaGithub className={styles.Icone} /></a>
                <a href="https://www.linkedin.com/in/yurimartinsdev/"><FaLinkedin className={styles.Icone} /></a>
                <a href="https://www.facebook.com/yuri.martins.54738/"><FaFacebookSquare className={styles.Icone} /></a>
            </div>
            <h3>@2021 Stecken</h3>
        </div>
    )
}