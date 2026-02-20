import { Button, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Panel from "../Panel";
import { usePersistentState } from "../../core/State";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useState } from "react";

const langs = [
    { value: 'us', label: 'English' },
    { value: 'de', label: 'Deutsch' },
    { value: 'cz', label: 'Česky' },
]

export const Language = () => {
    const { i18n, t } = useTranslation();
    const [lang, setUrlLang] = usePersistentState('language', 'us');

    const setLang = (l: string) => { i18n.changeLanguage(l); setUrlLang(l); };
    const langOpts = langs.map(({value, label}) => {
        const flag = <span className={`fi fi-${value}`} />;
        return (
            <Button 
                variant="outlined" 
                disabled={value === lang} 
                onClick={() => setLang(value)} 
                startIcon={flag}
                fullWidth
                key={`lang-option-${value}`}
                className="centered"
            >
                {label}
            </Button>
        );
    });
    const [resp, setResp] = useState('No.');
    const fetchResp = async () => {
        const response = await fetch('https://function-bun-production-1523.up.railway.app/api/health', {
            method: "GET", 
            headers: {                'Content-Type': 'application/json',}
        });
        const json = await response.json()
        setResp(json.status)
    }
    return (
        <>
        <Panel title={t('settings.lang')}>
            <Typography>{t('settings.langText')}</Typography>
            <Stack direction="row" sx={{mt: 1}}>{...langOpts}</Stack>

            <Button 
                variant="outlined"
                onClick={fetchResp}
                fullWidth
                key={`resp`}
                className="centered"
            >
                Fetch
            </Button>
            {resp}
        </Panel>
        
        
        </>
    );
}

export default Language