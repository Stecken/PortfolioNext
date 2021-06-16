import React, { useEffect, useState } from 'react';
import styles from '../styles/components/Terminal.module.css';
import ReactDOMServer from 'react-dom/server';

import $ from 'jquery';

interface TerminalProps {
    mode: Boolean;
}


export function Terminal({ ...props }: TerminalProps) {
    const [ path, setPath ] = useState('~/');
    const [ idInput, setIdInput ] = useState(1);

    //comandos
    // ls -> lista diretórios
    // help

    const paths = {
        '~/': {
            'test.txt': 'file',
        },
        '~/bio': {
            'foto.jpg': 'file',
            'abstract.txt': 'file',
        }
    }

    useEffect(() => {
        buildNewInput();
    }, []);

    const onKeyPressConsole = (id) => {
        let inPutVal = $(`#inputConsole${id}`).val();
        let inPut = $(`#inputConsole${id}`);
        inPut.css('width', (((inPutVal.length) + 1) * 10) + 'px');
    }

    const detectEnterConsole = (event) => {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            setIdInput(1 + idInput);
            
        }
    }

    const clearTerminal = () => {
        $('#terminal')                     //Select the object
            .children()             //Select all the children of the parent
            .not(':nth-last-child(0n+1)')    //Unselect the first child
            .remove();              //Remove
    }

    useEffect(() => {
        if (idInput != 1) {
            if (idInput % 10 === 0) {
                clearTerminal();
            }
                tratamentoConsole($(`#inputConsole${idInput - 1}`).val());
                $(`#inputConsole${idInput - 1}`).prop("disabled", true);

                try {
                    let oldInput = document.getElementById(`inputConsole${idInput - 1}`);
                    (oldInput.parentNode as Element).setAttribute("disabled", "");
                    oldInput.removeEventListener('keyup', (event) => {
                        detectEnterConsole(event);
                    });
                    oldInput.removeEventListener('keypress', () => {
                        onKeyPressConsole(idInput);
                    });
                }
                catch(e) {
                    console.log(e);
                }
                     
        }
    }, [idInput]);

    const buildNewInput = () => {
        const htmlString = ReactDOMServer.renderToStaticMarkup(
            <>
                <div className={styles.englobaConsole}>
                    <div className={styles.TerminalTextGreen}>[Stecken@localhost]:{path}#</div>
                    <input spellCheck={false} id={`inputConsole${idInput}`} className={styles.Input} />
                </div>
                <div id={`console-output${idInput}`} className={styles.englobaOutput + ' ' + styles.contentOutput}></div>
            </>
        );
        $('#terminal').append(htmlString);
        var newInput = document.getElementById(`inputConsole${idInput}`);
        newInput.focus();
        newInput.addEventListener('keyup', (event) => {
            detectEnterConsole(event);
        });
        newInput.addEventListener('keypress', () => {
            onKeyPressConsole(idInput);
        });
    }

    useEffect(() => {
        if (idInput != 1) {
            buildNewInput();
        }
    }, [path]);

    const tratamentoConsole = (command: String) => {
        if (command == undefined) {
            command = "nada nada";
        }
        let commandArray = command.split(" ");
        
        if (command == "ls -l") {
            for (let subpath in paths[path]) {
                const htmlString = ReactDOMServer.renderToStaticMarkup(
                    <div style={{ paddingRight: '1rem' }} className={`${paths[path][subpath] === 'dir' ? 
                    styles.typeDir + ' ' + styles.contentOutput : styles.typeFile + ' ' + styles.contentOutput}`}>
                        { subpath }
                    </div>
                );
                $(`#console-output${idInput - 1}`).append(htmlString);
            }
            buildNewInput();
        }
        else if (commandArray[0] == "cd") {
            typeof paths;
            if (!(commandArray.length < 2 || commandArray.length > 2)) {
                let therePath = false;
                if (path == '~/') {
                    if (commandArray[1] == "/"){
                        therePath = true;
                    }
                    else if (commandArray[1] == "bio") {
                        therePath = true;
                        setPath('~/bio');
                    }
                }
                else if (path == '~/bio') {
                    if (commandArray[1] == "/") {
                        therePath = true;
                        setPath('~/');
                    }
                    else if (commandArray[1] == "bio") {
                        therePath = true;
                    }
                    else if (commandArray[1] == "..") {
                        therePath = true;
                        setPath('~/');
                    }
                }
                
                if (!therePath) {
                    const htmlString = ReactDOMServer.renderToStaticMarkup(
                        <div>Path Inexistente</div>
                    );
                    $(`#console-output${idInput - 1}`).append(htmlString);
                    buildNewInput();
                }
            }
        }
        else if (command == "yuri") {
            (document.getElementById('audio') as HTMLAudioElement).play();
            buildNewInput();
            setTimeout(() => {
                (document.getElementById('audio') as HTMLAudioElement).pause();
            }, 30000)
        }
        else if (command == "clear") {
            clearTerminal();
            buildNewInput();
        }
        else if (commandArray[0] == "cat") {
            if (!(commandArray.length < 2 || commandArray.length > 2)) {
                let therePath = false;
                let file;
                if (path == '~/') {
                    if (commandArray[1] == "./test.txt" || commandArray[1] == "test.txt") {
                        therePath = true;
                        file = "test.txt";
                    }
                    else if (commandArray[1] == "/bio/abstract.txt") {
                        therePath = true;
                        file = "abstract.txt";
                    }
                }
                else if (path == '~/bio') {
                    if (commandArray[1] == "./abstract.txt" || commandArray[1] == "abstract.txt") {
                        therePath = true;
                        file = "abstract.txt";
                    }
                }
                if (!therePath) {
                    const htmlString = ReactDOMServer.renderToStaticMarkup(
                        <div>Arquivo inexistente</div>
                    );
                    $(`#console-output${idInput - 1}`).append(htmlString);
                    buildNewInput();
                }
                else if (therePath) {  
                    fetch(`/static/${file}`)
                        .then(response => response.text())
                        .then(data => {
                            console.log(data);
                            const htmlString = ReactDOMServer.renderToStaticMarkup(
                                <div style={{ paddingRight: '1rem' }} className={styles.contentOutput}>{data}</div>
                            );
                            $(`#console-output${idInput - 1}`).append(htmlString);
                            buildNewInput();
                        });
                }
            }
        }
        else {
            const htmlString = ReactDOMServer.renderToStaticMarkup(
                <div>Comando inexistente</div>
            );
            $(`#console-output${idInput - 1}`).append(htmlString);
            buildNewInput();
        }
    }    

    return (
        <div style={{ display: props.mode == true ? 'flex' : 'none'}} className={styles.Terminal}>
            <h1>Terminal</h1>
            <p>Terminal interativo, caso seja sua primeira vez, digite "help"</p>
            <div id="terminal" className={styles.englobaInputs}>
            </div>
            <audio id="audio" src="/static/rato.mp3" />
        </div>
    );
}