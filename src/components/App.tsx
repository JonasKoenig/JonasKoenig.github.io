import { observer } from 'mobx-react'
import Greeting from './Greeting';
import Skills from './Skills';
import CV from './CV';
import Chess from './Chess';
import JumpTo from './JumpTo';

const App = observer(() => {
    // const { feature } = useApp();
    return (
        <div style={{ minWidth: 0 }}>
            <Chess />
            <JumpTo />
            <Greeting />
            <Skills />
            <CV />
        </div >
    )
})

export default App
