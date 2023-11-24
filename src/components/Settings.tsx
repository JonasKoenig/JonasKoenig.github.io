import { Button, Menu, Radio, RadioGroup, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import Panel from "./Panel";
import { usePersistentState } from "../core/State";

// export const useLanguage = (): [string, (l: string) => void] => {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const lang = searchParams.get('l') ?? 'en';
//     const setLang = (l: string) => {searchParams.set('l', l), setSearchParams(searchParams)};
//     return [lang, setLang];
// }

type LaguageOptionProps = { value: string, label: string, current: string }

const LanguageOption = ({value, label, current}: LaguageOptionProps) => {
    return (
        <Typography fontWeight={current === value ? 600 : "normal"}>
            <Radio value={value} />
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
            <RadioGroup row value={lang} onChange={(_, v) => setLang(v)}>
                {/* <Typography fontWeight={lang === en ? "bold" : "normal"}><Radio value="en"/>English</Typography> */}
                <LanguageOption value="en" label="English" current={lang} />
                <LanguageOption value="de" label="Deutsch" current={lang} />
            </RadioGroup>
        </Panel>
    );
}

export default Language