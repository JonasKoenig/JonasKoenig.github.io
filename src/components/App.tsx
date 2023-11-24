import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next';
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
    const {t} = useTranslation();
    
    return (
        <Nav tabs={{
            about: {
                icon: <InfoOutlinedIcon />,
                label: t('about.title'),
                content: [<Skills />, <CV />]
            }, 
            game: {
                icon: <PanToolAltOutlinedIcon />,
                label: t('game.title'), 
                content: [<Chess />]
            }, 
            settings: {
                icon: <SettingsIcon />,
                label: t('settings.title'), 
                content: [<Language />]
            },
        }} />
    )
})

export default App
