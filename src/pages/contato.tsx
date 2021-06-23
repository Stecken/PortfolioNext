import React, { useContext } from 'react';

import Head from "next/head"

import styles from '../styles/pages/Contato.module.css';

import { FaGithub, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { ImWhatsapp, ImTwitter } from "react-icons/im";

import { RiChat3Fill, RiInstagramLine } from "react-icons/ri"

interface UserProps {
    theme: number;
}

export default function Contato(props: UserProps) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Projetos | MoveWe</title>
            </Head>
            <section className={styles.conteudo}>
                <div className={styles.TitlePage}>
                    <RiChat3Fill className={styles.TitlePageIcon}/>
                    <h3>Contato</h3>
                </div>
                <div className={styles.contatos}>
                    <div className={styles.cardPerson}>
                        <div>
                            <div className={styles.englobaNamePerson}>
                                <h4>Yuri Martins</h4>
                                <h5>Programador</h5>
                            </div>
                            <div className={styles.redesSociaisPerson}>
                                <a href="https://github.com/stecken"><FaGithub className={styles.Icone} /></a>
                                <a href="https://www.linkedin.com/in/yurimartinsdev/"><FaLinkedin className={styles.Icone} /></a>
                                <a href="https://www.facebook.com/yuri.martins.54738/"><FaFacebookSquare className={styles.Icone} /></a>
                                <a href="https://wa.me/17981732422/"><ImWhatsapp className={styles.Icone}/></a>
                                <a href="https://www.instagram.com/yuri.martinsbr/"><RiInstagramLine className={styles.Icone} /></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardPerson}>
                        <div>
                            <div className={styles.englobaNamePerson}>
                                <h4>Mikael Zana</h4>
                                <h5>Designer</h5>
                            </div>
                            <div className={styles.redesSociaisPerson}>
                                <a href="https://wa.me/17981413051/"><ImWhatsapp className={styles.Icone}/></a>
                                <a href=""><RiInstagramLine className={styles.Icone} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}