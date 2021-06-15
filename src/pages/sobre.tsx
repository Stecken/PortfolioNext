import React, { useEffect, useState } from 'react';

import Head from "next/head"

import { HeaderPages } from '../components/HeaderPages';

import styles from '../styles/pages/Sobre.module.css';

import Switch from "react-switch";
import { Terminal } from '../components/Terminal';

interface UserProps {
    theme: number;
}

export default function Sobre(props: UserProps) {
    const [ mode, setMode] = useState(false);
    const onChangeMode = () => {
        setMode(!mode);
    }

    return (
        <div className={styles.container}>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|VT323" rel="stylesheet" />
                <title>Sobre | Portfólio</title>
            </Head>
            <section className={styles.conteudo} style={{ backgroundColor: mode == true ? 'black' : 'rgb(23, 43, 73)'}}>
                <div className={styles.NormalMode} style={{ display: mode == false ? 'flex' : 'none'}}>
                    <div className={styles.bio}>
                        <div className={styles.englobaFoto}>
                            <img id="imageEu" src="/static/pp.jpg" alt="" />
                        </div>
                        <div className={styles.englobaText}>
                            <h3>Sobre mim</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                    <div className={styles.Skills}>
                        <h2>Habilidades</h2>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <Terminal mode={mode} />
                <div className={styles.englobaMode}>
                    <span>Escolha o modo</span>
                    <Switch onChange={onChangeMode} checked={mode} />
                </div>
            </section>
        </div>
    )
}