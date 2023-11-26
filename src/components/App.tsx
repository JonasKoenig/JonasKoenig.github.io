import { observer } from 'mobx-react'
import PersonIcon from '@mui/icons-material/Person';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import SettingsIcon from '@mui/icons-material/Settings';

import Nav from './Nav';
import Skills from './about/Skills';
import CV from './about/CV';
import Language from './settings/Language';
import Game from './settings/GameSettings';

const App = observer(() => {
    // const { feature } = useApp();
    const tabs = {
        about: {
            icon: <PersonIcon />,
            content: [
                <Skills key="skills" />, 
                <CV key="cv" />,
            ]
        }, 
        game: {
            icon: <PanToolAltIcon />,
            content: [
                // <Chess key="chess" />,
            ]
        }, 
        settings: {
            icon: <SettingsIcon />,
            content: [
                <Language key="lang" />,
                <Game key="game" />,
            ]
        },
    };
    return <Nav tabs={tabs} />
})

export default App
