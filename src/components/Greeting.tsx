import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { IconButton, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

const Greeting = (): ReactElement => {
    // const { t, i18n } = useTranslation();
    const { t } = useTranslation();

    // const setLang = (lang: 'en' | 'de') => {
    //     i18n.changeLanguage(lang);
    // }

    return (
        <div id="greeting">
            <Typography variant="h1" fontWeight={700} align="center">
                {t('greeting')}
            </Typography>
            <Typography variant="h1" fontWeight={700} align="center">
                Jonas König
            </Typography>
            <div style={{ position: "absolute", top: '15px', right: '15px' }}>
                {/* <Button onClick={() => setLang('en')}>EN</Button>
                <Button onClick={() => setLang('de')}>DE</Button> */}
                <IconButton sx={{ backgroundColor: '#00000040' }}>
                    <SettingsIcon htmlColor="white" />
                </IconButton>
            </div>
        </div>
    );
}
export default Greeting;
