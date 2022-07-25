import React, { useEffect, useState, useContext } from 'react';

import Head from "next/head"

import { HeaderPages } from '../components/HeaderPages';

import { ModeContext, ModeProvider } from "../contexts/ModeContext";

import styles from '../styles/pages/Sobre.module.css';

import Switch from "react-switch";
import { Terminal } from '../components/Terminal';
import { GetServerSideProps } from 'next';

interface UserProps {
    mode: Boolean;
}

export default function Sobre(props: UserProps) {
    const { mode, AlternarMode } = useContext(ModeContext);

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
                            <img id="imageEu" src="/static/pp.jpeg" alt="" />
                        </div>
                        <div className={styles.englobaText}>
                            <h3>Carreira</h3>
                            <p>
                                Há quase 4 anos no ramo da computação, possuo experiência no desenvolvimento de aplicações web,
                                através de HTML5; CSS3; JS(TypeScript, React, Next.js, Angular e Express) e PHP.
                                Possuo experiência no desenvolvimento de embarcados, em microcontroladores AVR, através de Assembly 8 bit e C.
                                Possuo experiência no desenvolvimento de aplicações desktop, com Electron(JS), e em C(Win32 API).
                                Possuo experiência no desenvolvimento de aplicações mobile, com Ionic(Cordova e Angular) e React Native.
                                Possuo experiência em testes automatizados, entre eles, TDD e E2E.
                                Atualmente estou focado no desenvolvimento web, trabalhando em soluções de interface SPA.
                                Nas horas vagas, possuo interesse no desenvolvimento de firmware para embarcados, sistema operacionais e aplicações de baixo nível.
                                #DontStopLearning. 
                            </p>
                        </div>
                    </div>
                    <div className={styles.Skills}>
                        <h2>Tecnologias</h2>
                        <div>
                            <div>
                                <h4>Tenho Experiência</h4>
                                <div>
                                    <img src="https://xesque.rocketseat.dev/platform/tech/c.svg" alt="C" />
                                    <img src="https://xesque.rocketseat.dev/platform/tech/javascript.svg" alt="JS" />
                                    <img src="https://xesque.rocketseat.dev/platform/tech/python.svg" alt="Python" />
                                    <img src="https://xesque.rocketseat.dev/platform/tech/php.svg" alt="Python" />
                                    <img src="https://xesque.rocketseat.dev/platform/tech/reactjs.svg" alt="Python" />
                                </div>
                            </div>
                            <div>
                                <h4>Estou Estudando</h4>
                                <div>
                                    <img src="https://xesque.rocketseat.dev/platform/tech/php.svg" alt="Python" />
                                    <img src="https://xesque.rocketseat.dev/platform/tech/reactjs.svg" alt="Python" />
                                    <img src="https://xesque.rocketseat.dev/platform/tech/javascript.svg" alt="JS" />
                                    <img src="https://xesque.rocketseat.dev/platform/tech/typescript.svg" alt="JS" />
                                </div>
                            </div>
                            <div>
                                <h4>Tenho Interesse</h4>
                                <div>
                                    <img src="https://xesque.rocketseat.dev/platform/tech/c.svg" alt="C" />
                                    <img src="https://xesque.rocketseat.dev/platform/tech/cplusplus.svg" alt="C++" />
                                    <img src="https://xesque.rocketseat.dev/platform/tech/javascript.svg" alt="JS" />
                                    <img src="https://xesque.rocketseat.dev/platform/tech/python.svg" alt="Python" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Terminal mode={mode} />
                <div className={styles.englobaMode}>
                    <span>Escolha o modo</span>
                    <Switch onChange={AlternarMode} checked={Boolean(mode)} />
                </div>
            </section>
        </div>
    )
}