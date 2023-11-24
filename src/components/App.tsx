import { observer } from 'mobx-react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

import Nav from './Nav';
import Skills from './Skills';
import CV from './CV';
import Chess from './Chess';
import Language from './Settings';

const App = observer(() => {
    // const { feature } = useApp();
    const tabs = {
        about: {
            icon: <InfoOutlinedIcon />,
            content: [
                <Skills key="skills" />, 
                <CV key="cv"/>
            ]
        }, 
        game: {
            icon: <PanToolAltOutlinedIcon />,
            content: [
                <Chess key="chess" />
            ]
        }, 
        settings: {
            icon: <SettingsIcon />,
            content: [
                <Language key="lang"/>
            ]
        },
    };
    return <Nav tabs={tabs} />
})

export default App
