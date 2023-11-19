import { Avatar, Box, IconButton, Tooltip, Typography } from "@mui/material"
import { ReactElement } from "react"
import Panel from "./Panel"
import { t } from "i18next"

const techs = {
    Typescript: {
        icon: "tech/ts.svg",
        url: ""
    },
    React: {
        icon: "tech/react.svg",
        url: ""
    }
}

const Skills = (): ReactElement => {
    const techButtons = Object.entries(techs).map(([name, { icon, url }]) => {
        return (
            <Tooltip title={name} key={`tech_${name}`}>
                <IconButton onClick={() => window.open(url, '_blank')?.focus()}>
                    <Avatar src={icon} variant="square" sx={{ width: 28, height: 28 }}></Avatar>
                </IconButton>
            </Tooltip>
        )
    })
    return (
        <Panel title={t('exp.title')}>
            <Typography>{t('exp.content')}</Typography>
            <Box>{...techButtons}</Box>
        </Panel>
    )
}

export default Skills