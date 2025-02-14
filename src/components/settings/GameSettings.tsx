import { useTranslation } from "react-i18next";
import { Box, Button, Collapse, IconButton, Stack, TextField, Typography } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import FemaleIcon from '@mui/icons-material/Female';
import { useUrlState } from "../../core/State";
import { addRandomQueens, initialFen } from "../game/Validate";
import Panel from "../Panel";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const Game = () => {
    const {t} = useTranslation();
    const [fen, setFen] = useUrlState('g', initialFen);
    const [player1, setPlayer1] = useUrlState('p1', '');
    const [player2, setPlayer2] = useUrlState('p2', '');
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => setExpanded((prev) => !prev);
    const expandIcon = expanded ? <ExpandLess /> : <ExpandMore />;
    return (
        <Panel>
            <Stack direction="row">
                <TextField label={t('game.player1')} value={player1} onChange={({target}) => setPlayer1(target.value)} fullWidth />
                <IconButton onClick={toggleExpanded} size="small" color="primary" sx={{ width: '66px' }}>{expandIcon}</IconButton>
                <TextField label={t('game.player2')} value={player2} onChange={({target}) => setPlayer2(target.value)} fullWidth />
            </Stack>

            <Collapse appear={expanded} in={expanded}>
                <Box>
                    <Typography sx={{ mt: 1 }}>{t('settings.gameText')}</Typography>
                    <Button variant="outlined" onClick={() => setFen(initialFen)} startIcon={<RefreshIcon />} className="centered">
                        {t('settings.gameReset')}
                    </Button>
                
                    <Typography sx={{ mt: 1 }}>{t('settings.queensText')}</Typography>
                    <Button variant="outlined" onClick={() => setFen(addRandomQueens(fen))} startIcon={<FemaleIcon />} className="centered">
                        {t('settings.addQueens')}
                    </Button>
                </Box>
            </Collapse>
        </Panel>
    )
};

export default Game;