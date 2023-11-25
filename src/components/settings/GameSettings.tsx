import { useTranslation } from "react-i18next";
import { Button, Typography } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import FemaleIcon from '@mui/icons-material/Female';
import { useUrlState } from "../../core/State";
import { addRandomQueens, initialFen } from "../game/Validate";
import Panel from "../Panel";

const Game = () => {
    const {t} = useTranslation();
    const [fen, setFen] = useUrlState('g', initialFen);
    return (
        <Panel title={t('game.header')}>
            <Typography>{t('settings.gameText')}</Typography>
            <Button variant="outlined" onClick={() => setFen(initialFen)} startIcon={<RefreshIcon />}>
                {t('settings.gameReset')}
            </Button>
            <Button variant="outlined" onClick={() => setFen(addRandomQueens(fen))} startIcon={<FemaleIcon />}>
                {t('settings.addQueens')}
            </Button>
        </Panel>
    )
};

export default Game;