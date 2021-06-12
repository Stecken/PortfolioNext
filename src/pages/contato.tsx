import React, { useContext } from 'react';

import Head from "next/head"

import { HeaderPages } from '../components/HeaderPages';

import styles from '../styles/pages/Home.module.css';

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
                Em desenvolvimento
            </section>
        </div>
    )
}