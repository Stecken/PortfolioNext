import React, { useContext } from 'react';

import Head from "next/head"

import styles from '../styles/pages/Projetos.module.css';


interface UserProps {
    theme: number;
}

export default function Projetos(props: UserProps) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Projetos | MoveWe</title>
            </Head>
            <section className={styles.conteudo}>
                <h3><p>(() {'=>'} {"{"} let page = </p>"Projetos" <p>{"}"})()</p></h3>
                <div className={styles.englobaCards}>
                    <div>
                        <div className={styles.card} data-effect="zoom">
                            <figure className={styles.cardImage}>
                                <img src="/static/Movewe.jpg" />
                            </figure>
                            <div className={styles.cardBody}>
                                <h3 className={styles.cardName}>NLW 4</h3>
                                <p className={styles.cardDesc}> Projeto realizado durante a NLW 4, sobre um sistema de desafios físicos e com pontuação</p>
                            </div>
                            <div className={styles.cardFooter}>
                                <p>Feb 28 2021</p>
                            </div>
                            <div className={styles.tecnologies}>
                                <img src="https://xesque.rocketseat.dev/platform/tech/reactjs.svg" alt="ReactJS" />
                                <img src="https://xesque.rocketseat.dev/platform/tech/nextjs.svg" alt="Next.js" />
                                <img src="https://xesque.rocketseat.dev/platform/tech/typescript.svg" alt="TypeScript" />
                                <img src="https://xesque.rocketseat.dev/platform/tech/css3.svg" alt="Css3" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.card} data-effect="zoom">
                            <figure className={styles.cardImage}>
                                <img src="/static/TCC.jpg" />
                            </figure>
                            <div className={styles.cardBody}>
                                <h3 className={styles.cardName}>TCC</h3>
                                <p className={styles.cardDesc}> Projeto realizado durante a NLW 4, sobre um sistema de desafios físicos e com pontuação</p>
                            </div>
                            <div className={styles.cardFooter}>
                                <p>Feb 28 2021</p>
                            </div>
                            <div className={styles.tecnologies}>
                                <img src="https://xesque.rocketseat.dev/platform/tech/html5.svg" alt="HTML5" />
                                <img src="https://xesque.rocketseat.dev/platform/tech/css3.svg" alt="Css3" />
                                <img src="https://xesque.rocketseat.dev/platform/tech/javascript.svg" alt="JS" />
                                <img src="https://xesque.rocketseat.dev/platform/tech/jquery.svg" alt="Jquery" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.card} data-effect="zoom">
                            <figure className={styles.cardImage}>
                                <img src="/static/notepad.gif" />
                            </figure>
                            <div className={styles.cardBody}>
                                <h3 className={styles.cardName}>Recriação do Notepad</h3>
                                <p className={styles.cardDesc}> Projeto realizado durante a NLW 4, sobre um sistema de desafios físicos e com pontuação</p>
                            </div>
                            <div className={styles.cardFooter}>
                                <p>Feb 28 2021</p>
                            </div>
                            <div className={styles.tecnologies}>
                                <img src="https://xesque.rocketseat.dev/platform/tech/c.svg" alt="C" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.card} data-effect="zoom">
                            <figure className={styles.cardImage}>
                                <img src="/static/api.jpg" />
                            </figure>
                            <div className={styles.cardBody}>
                                <h3 className={styles.cardName}>API do TCC</h3>
                                <p className={styles.cardDesc}> Projeto realizado durante a NLW 4, sobre um sistema de desafios físicos e com pontuação</p>
                            </div>
                            <div className={styles.cardFooter}>
                                <p>Feb 28 2021</p>
                            </div>
                            <div className={styles.tecnologies}>
                                <img src="https://xesque.rocketseat.dev/platform/tech/php.svg" alt="PHP" />
                                <img src="https://xesque.rocketseat.dev/platform/tech/mysql.svg" alt="MySQL" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.card} data-effect="zoom">
                            <figure className={styles.cardImage}>
                                <img src="/static/assembly.jpg" />
                            </figure>
                            <div className={styles.cardBody}>
                                <h3 className={styles.cardName}>Adaptação Biblitoeca Assembly</h3>
                                <p className={styles.cardDesc}> Projeto realizado durante a NLW 4, sobre um sistema de desafios físicos e com pontuação</p>
                            </div>
                            <div className={styles.cardFooter}>
                                <p>Feb 28 2021</p>
                            </div>
                            <div className={styles.tecnologies}>
                                <img src="/static/asm.png" alt="Asm" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}