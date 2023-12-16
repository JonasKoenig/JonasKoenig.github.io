import { useTranslation } from "react-i18next";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import FemaleIcon from '@mui/icons-material/Female';
import { useUrlState } from "../../core/State";
import { addRandomQueens, initialFen } from "../game/Validate";
import Panel from "../Panel";

const Game = () => {
    const {t} = useTranslation();
    const [fen, setFen] = useUrlState('g', initialFen);
    const [player1, setPlayer1] = useUrlState('p1', '');
    const [player2, setPlayer2] = useUrlState('p2', '');
    return (
        <Panel title={t('game.header')}>
                <Typography>{t('settings.gameText')}</Typography>
                <Button variant="outlined" onClick={() => setFen(initialFen)} startIcon={<RefreshIcon />} className="centered">
                    {t('settings.gameReset')}
                </Button>

                <Typography sx={{ mt: 1 }}>{t('settings.namesText')}</Typography>
                <TextField label={t('game.player1')} value={player1} onChange={({target}) => setPlayer1(target.value)} fullWidth />
                <TextField label={t('game.player2')} value={player2} onChange={({target}) => setPlayer2(target.value)} fullWidth />
            
                <Typography sx={{ mt: 1 }}>{t('settings.queensText')}</Typography>
                <Button variant="outlined" onClick={() => setFen(addRandomQueens(fen))} startIcon={<FemaleIcon />} className="centered">
                    {t('settings.addQueens')}
                </Button>
        </Panel>
    )
};

export default Game;