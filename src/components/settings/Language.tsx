import { Radio, RadioGroup, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Panel from "../Panel";
import { usePersistentState } from "../../core/State";

type LaguageOptionProps = { value: string, label: string, current: string }

const LanguageOption = ({value, label, current}: LaguageOptionProps) => {
    return (
        <Typography fontWeight={current === value ? 600 : "normal"}>
            <Radio value={value} sx={{color: "white"}} size="small" />
            {label}
        </Typography>
    );
}

export const Language = () => {
    const { i18n, t } = useTranslation();
    const [lang, setUrlLang] = usePersistentState('language', 'en');
    const setLang = (lang: string) => { i18n.changeLanguage(lang); setUrlLang(lang); };
    return (
        <Panel title={t('settings.lang')}>
            <RadioGroup value={lang} onChange={(_, v) => setLang(v)}>
                {/* <Typography fontWeight={lang === en ? "bold" : "normal"}><Radio value="en"/>English</Typography> */}
                <LanguageOption value="en" label="English" current={lang} />
                <LanguageOption value="de" label="Deutsch" current={lang} />
            </RadioGroup>
        </Panel>
    );
}

export default Language