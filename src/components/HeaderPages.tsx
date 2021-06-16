import React, { useEffect, useState } from 'react';
import styles from '../styles/components/Header.module.css';
import { useRouter } from 'next/router'

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFacebookSquare, FaHome, FaCode, FaEnvelope, FaUserAlt, FaBars } from 'react-icons/fa';

export function HeaderPages(...props) {
    const [ marginStyle, setMarginStyle ] = useState(true);
    const [ pathState, setPathState ] = useState('');
    const [ unicaVez, setUnicaVez ] = useState(false);
    const [ isMobile, setIsMobile ] = useState(false);
    const [ menuMobileState, setMenuMobileState ] = useState(false);
    const router = useRouter();

    const onChangeURLUnico = () => {
        if (unicaVez != true) {
            setUnicaVez(true);
            if (window.location.pathname == "/") {
                setPathState("/");
            }
            else if (window.location.pathname == "/sobre") {
                setPathState("sobre");
            }
            else if (window.location.pathname == "/projeto") {
                setPathState("projeto");
            }
            else if (window.location.pathname == "/contato") {
                setPathState("contato");
            }
        }
    }

    const onChangeURL = () => {
        if (window.location.pathname == "/") {
            setPathState("/");
        }
        else if (window.location.pathname == "/sobre") {
            setPathState("sobre");
        }
        else if (window.location.pathname == "/projetos") {
            setPathState("projetos");
        }
        else if (window.location.pathname == "/contato") {
            setPathState("contato");
        }
    }

    const hookScrool = () => {
        if (window.pageYOffset === 0 && window.pageYOffset <= 29) {
            setMarginStyle(true);
        }
        else if (window.pageYOffset >= 30) {
            setMarginStyle(false);
        }
    }

    const defineIsMobile = () => {
        if (window.innerWidth <= 750 && window.innerWidth > 470) {
            setIsMobile(false);
        }
        else if (window.innerWidth < 470) {
            setIsMobile(true);
        }
    }

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', hookScrool);
        window.addEventListener('resize', defineIsMobile);
        window.addEventListener("load", (event) => {
            onChangeURLUnico();
        }); 
        useEffect(() => {
            onChangeURL();
        }, [window.location.pathname, marginStyle]);
    }
    

    const onClickButtonMobile = () => {
        if (menuMobileState == false) {
            setMenuMobileState(true);
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (menuMobileState == true) {
                
                window.addEventListener('click', (e) => {
                    if (!document.getElementById('navbarMobile').contains(e.target as Node)) {
                        setMenuMobileState(false);
                    }
                });
            }
            else {
                window.removeEventListener('click', () => { setMenuMobileState(false) });
            }
        }
    }, [menuMobileState]);
    

    return (
        <div style={{ padding: marginStyle == true ? '1.5rem 1rem' : '0.5rem 1rem'}} className={styles.container}>
            <div className={styles.nameTitle}>
                <Link href="/"> 
                    <a className={styles.titleNavbar}>Stecken</a>
                </Link>
                <div className={styles.englobaRedes}>
                    <a href="https://github.com/stecken"><FaGithub className={styles.iconeGit} /></a>
                    <a href="https://www.facebook.com/yuri.martins.54738/">
                        <FaFacebookSquare className={styles.iconeGit} />
                    </a>
                    <a href="https://www.linkedin.com/in/yurimartinsdev/">
                        <FaLinkedin className={styles.iconeGit} />
                    </a>
                </div>
            </div>

            <div className={styles.navbarMobile} id="navbarMobile">
                <FaBars className={styles.buttonMobile} onClick={onClickButtonMobile}/>
                <nav className={`${menuMobileState == true ? styles.menuActive : ''}`}>
                    <Link href="/">              
                        <a className={`${pathState != "/" ?
                            styles.linkHeaderDesativado : (pathState == "/") ?
                                styles.linkMobileActive : ''}`
                        }>
                            <FaHome className={styles.redesSociais} />
                            <h4>Início</h4>
                        </a>
                    </Link>
                    <Link href="/sobre">
                        <a className={`${pathState != "sobre" ?
                            styles.linkHeaderDesativado : (pathState == "sobre") ?
                                styles.linkMobileActive : ''}`
                        }>
                            <FaUserAlt className={styles.redesSociais} />
                            <h4>Sobre</h4>
                        </a>
                    </Link>
                    <Link href="/projetos">
                        <a className={`${pathState != "projetos" ?
                            styles.linkHeaderDesativado : (pathState == "projetos") ?
                                styles.linkMobileActive : ''}`
                        }>
                            <FaCode className={styles.redesSociais} />
                            <h4>Projetos</h4>
                        </a>
                    </Link>
                    <Link href="/contato">
                        <a className={`${pathState != "contato" ?
                            styles.linkHeaderDesativado : (pathState == "contato") ?
                                styles.linkMobileActive : ''}`
                        }>
                            <FaEnvelope className={styles.redesSociais} />
                            <h4>Contato</h4>
                        </a>
                    </Link>
                </nav>
            </div>

            <nav className={styles.navbarPC}>
                <div>
                    <Link href="/">
                        <a className={`${pathState != "/" ?
                            styles.linkHeaderDesativado : (pathState == "/" && marginStyle == true) ?
                                (styles.underline + ' ' + styles.linkHeaderAtivado) : styles.underline}`
                        }>
                            <FaHome className={styles.redesSociais} />
                            <h4>Início</h4>
                        </a>
                    </Link>                  
                </div>
                <div>
                    <Link href="/sobre">
                        <a className={`${pathState != "sobre" ? 
                            styles.linkHeaderDesativado : (pathState == "sobre" && marginStyle == true) ?
                            (styles.underline + ' ' + styles.linkHeaderAtivado) : styles.underline}`
                        }>
                            <FaUserAlt className={styles.redesSociais} />
                            <h4>Sobre</h4>
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/projetos">
                        <a className={`${pathState != "projetos" ?
                            styles.linkHeaderDesativado : (pathState == "projetos" && marginStyle == true) ?
                                (styles.underline + ' ' + styles.linkHeaderAtivado) : styles.underline}`
                        }>
                            <FaCode className={styles.redesSociais} />
                            <h4>Projetos</h4>
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/contato">
                        <a className={`${pathState != "contato" ?
                            styles.linkHeaderDesativado : (pathState == "contato" && marginStyle == true) ?
                                (styles.underline + ' ' + styles.linkHeaderAtivado) : styles.underline}`
                        }>
                            <FaEnvelope className={styles.redesSociais} />
                            <h4>Contato</h4>
                        </a>
                    </Link>
                </div>
            </nav>
        </div>
    );
}