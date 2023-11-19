import { observer } from 'mobx-react'
import { Typography } from '@mui/material';
import Greeting from './Greeting';
import Panel from './Panel';
import { useTranslation } from "react-i18next";
import TechGallery from './TechGallery';
import CV from './CV';
import Chess from './Chess';
import JumpTo from './JumpTo';

const App = observer(() => {
    const { t } = useTranslation();
    // const { feature } = useApp();
    return (
        <div style={{ minWidth: 0 }}>
            <Chess />
            <JumpTo />
            <Greeting />
            <Panel title={t('exp.title')}>
                <Typography>{t('exp.content')}</Typography>
                <TechGallery />
            </Panel>
            <Panel title={t('cv.title')}>
                <CV />
            </Panel>
        </div >
    )
})

export default App
