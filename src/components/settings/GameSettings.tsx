import { useTranslation } from "react-i18next";
import { Button, Typography } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import FemaleIcon from '@mui/icons-material/Female';
import { useUrlState } from "../../core/State";
import { initialFen } from "../game/Chess";
import Panel from "../Panel";

const addQueens = (fen: string) => {
    const i = Math.floor(Math.random() * 64);
    const queen = Math.random() >= 0.5 ? 'Q' : 'q'
    return `${fen.slice(0, i)}${queen}${fen.slice(i + 1)}`
};

const Game = () => {
    const {t} = useTranslation();
    const [fen, setFen] = useUrlState('g', initialFen);
    return (
        <Panel title={t('game.header')}>
            <Typography>{t('settings.gameText')}</Typography>
            <Button variant="outlined" onClick={() => setFen(initialFen)} startIcon={<RefreshIcon />}>
                {t('settings.gameReset')}
            </Button>
            <Button variant="outlined" onClick={() => setFen(addQueens(fen))} startIcon={<FemaleIcon />}>
                {t('settings.addQueens')}
            </Button>
        </Panel>
    )
};

export default Game;