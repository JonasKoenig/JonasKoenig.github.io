import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Panel from "../Panel";
import { usePersistentState } from "../../core/State";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const langs = [
    { value: 'gb', label: 'English' },
    { value: 'de', label: 'Deutsch' },
]

export const Language = () => {
    const { i18n, t } = useTranslation();
    const [lang, setUrlLang] = usePersistentState('language', 'en');

    const setLang = (l: string) => { i18n.changeLanguage(l); setUrlLang(l); };
    const langOpts = langs.map(({value, label}) => {
        const sx = { border: value === lang ? '1px solid #FFEB3B' : 'none' }
        return (
            <Button onClick={() => setLang(value)} sx={sx} key={`lang-option-${value}`}>
                <span className={`fi fi-${value}`} style={{ marginRight: '4px' }} />
                <Typography>{label}</Typography>
            </Button>
        );
    });
    return (
        <Panel title={t('settings.appearance')}>
            {[
                <Typography key="lang-options-header">{t('settings.lang')}</Typography>,
                ...langOpts,
            ]}
        </Panel>
    );
}

export default Language