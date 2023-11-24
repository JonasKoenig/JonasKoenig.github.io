import { Paper, Typography } from "@mui/material";
import { ReactElement } from "react";

type PanelProps = {
    title?: string,
    children: ReactElement | ReactElement[],
    sx?: {}
}

const Panel = ({ title, children, sx }: PanelProps): ReactElement => {
    return (
        <Paper elevation={0} sx={sx}>
            {title ? <Typography variant="h5" fontWeight={500}>{title}</Typography> : null}
            {children}
        </Paper>
    )
}
export default Panel