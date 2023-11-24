import { Avatar, IconButton, Tooltip, Typography } from "@mui/material"
import { ReactElement } from "react"
import Panel from "../Panel"
import { t } from "i18next"

const techs = {
    Typescript: {
        icon: "tech/ts.svg",
        url: "https://www.typescriptlang.org/"
    },
    React: {
        icon: "tech/react.svg",
        url: "https://react.dev/"
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
        <Panel title={t('about.exp')}>
            <Typography>{t('about.expText')}</Typography>
            <div className="skillIcons">{...techButtons}</div>
        </Panel>
    )
}

export default Skills