import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box } from '@mui/material';

import Nav, { Header } from './Nav';
import Skills from './about/Skills';
import CV from './about/CV';
import Language from './settings/Language';
import Game from './settings/GameSettings';
import Chess from './game/Chess';
import { Player1, Player2 } from './game/ChessPlayer';
import Greeting from './about/Greeting';

const App = observer(() => {
    // const { feature } = useApp();
    const {t} = useTranslation();
    const tabs = {
        about: {
            icon: <AccountBoxIcon />,
            content: (
                <Box className="content">
                    <Header label={t(`about.header`)} />
                    <Greeting key="greeting" />
                    <Skills key="skills" />
                    <CV key="cv" />
                </Box>
            )
        }, 
        game: {
            icon: <PanToolAltIcon />,
            content: (
                <Box className="content">
                    <Player1 />
                    <Chess key='chess' />
                    <Player2 />
                </Box>
            )
        }, 
        settings: {
            icon: <SettingsIcon />,
            content: (
                <Box className="content">
                    <Header label={t(`settings.header`)} />
                    <Language key="lang" />
                    <Game key="game" />
                </Box>
            )
            
        },
    };
    return <Nav tabs={tabs} />
})

export default App
