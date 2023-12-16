import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import Panel from "../Panel";
import { useUrlState } from "../../core/State";


const Greeting = () => {
    const {t} = useTranslation();
    const [player1] = useUrlState('p1', '');
    const [player2] = useUrlState('p2', '');
    const hasName1 = player1 !== ''
    const hasName2 = player2 !== ''
    const greeting = !hasName1 && !hasName2
        ? t('about.greetingNoName')
        : t('about.greeting', { 
            name: hasName1 && hasName2 ? player1 + ' & ' + player2 : player1 + player2
        }) 
    return (
        <Panel title={greeting}>
            <Typography>{t('about.greetingText')}</Typography>
        </Panel>
    );
}

export default Greeting;