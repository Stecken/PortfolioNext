import { createContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';

interface ChallengesContextData {
    theme: number;
}

interface ChallengesProviderProps {
    children: ReactNode;
    theme: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
    const [theme, setTheme] = useState(rest.theme ?? 1);

    return (
        <ChallengesContext.Provider value={
                { 
                    theme
                }
            }
        >
            { children }
        </ChallengesContext.Provider>
    );
}