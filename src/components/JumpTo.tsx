import { IconButton } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const JumpTo = () => {
    const onClick = () => document.getElementById('greeting')?.scrollIntoView({ behavior: 'smooth' });
    return (
        <div className="jumpTo">
            <IconButton onClick={onClick} sx={{ backgroundColor: '#00000040' }}>
                <ArrowDownwardIcon htmlColor="white" />
            </IconButton>
        </div>
    )
}

export default JumpTo;