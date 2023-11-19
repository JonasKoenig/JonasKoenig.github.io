import { ReactElement } from "react";
import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Greeting = (): ReactElement => {
    const { t, i18n } = useTranslation();

    const setLang = (lang: 'en' | 'de') => {
        i18n.changeLanguage(lang);
    }

    return (
        <div id="greeting">
            <Typography variant="h1" fontWeight={700} align="center">
                {t('greeting')}
            </Typography>
            <Typography variant="h1" fontWeight={700} align="center">
                Jonas König
            </Typography>
            <div style={{ position: "absolute", top: 0, right: 0 }}>
                <Button onClick={() => setLang('en')}>EN</Button>
                <Button onClick={() => setLang('de')}>DE</Button>
            </div>
        </div>
    );
}
export default Greeting;
