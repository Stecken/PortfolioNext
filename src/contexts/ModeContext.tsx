import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

interface IModeContextData {
    mode: Boolean;
    AlternarMode: () => void;
    loadModeCookie: () => Promise<void>;
}

interface IModeContextProps {
    children: ReactNode;
}



export const ModeContext = createContext({} as IModeContextData);

export function ModeProvider({ children }: IModeContextProps) {
    const [mode, setMode] = useState(null);
    const [contV, setConV] = useState(0);

    async function loadModeCookie(): Promise<void> {
        const modeC = Cookies.get('mode');
        if (typeof (modeC) !== 'undefined') {
            console.log("dentro dos cookies", modeC);
            const modeParams = modeC ?? false as Boolean;
            console.log("ModeParams:", modeParams, typeof modeParams);
            setMode(Boolean(modeParams));
        }
        else {
            setMode(false);
        }
    }


    useEffect(() => {
        loadModeCookie();
    }, []);

    useEffect(() => {
        if (mode == true) {
            console.log('\ncontV:', contV);
            console.log('setando cookie', mode);
            Cookies.set('mode', String(mode));
        }
        else {
            Cookies.remove('mode');
        }
    }, [mode]);

    function AlternarMode(): void {
        if (mode) {
            setMode(false);
        }
        else {
            setMode(true);
        }
    }


    return (
        <ModeContext.Provider value={{
            mode, 
            AlternarMode,
            loadModeCookie,
        }}>
            {children}
        </ModeContext.Provider>
    );
}