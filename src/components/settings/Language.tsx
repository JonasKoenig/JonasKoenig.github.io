import { Button, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Panel from "../Panel";
import { usePersistentState } from "../../core/State";
import "/node_modules/flag-icons/css/flag-icons.min.css";

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
    return (
        <>
        <Panel title={t('settings.appearance')}>
            <Typography key="lang-options-header">{t('settings.lang')}</Typography>
            <Stack direction="row">{...langOpts}</Stack>
        </Panel>
        
        
        </>
    );
}

export default Language