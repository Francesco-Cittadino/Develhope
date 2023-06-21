// Rewrite the DisplayLanguage 
// component from 
// Context 02 to be a function component, 
// and access the LanguageContext through the useContext hook.
import { useContext } from "react";
import { createContext } from "react";
export const LanguageContext = createContext("en");

const objLang = {
    en:{
        selected: "The current language is Englisg"
    },
    it:{

        selected: "La lingua selezionata è Italiano"
    }
} 

export function DisplayLanguageFunc (){
    const lang = useContext(LanguageContext);
    return(
        <div>
            <h1>
                {objLang[lang].selected}
            </h1>
        </div>
    )
}