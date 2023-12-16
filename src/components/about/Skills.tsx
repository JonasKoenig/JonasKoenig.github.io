import { Avatar, IconButton, Tooltip, Typography } from "@mui/material"
import { ReactElement } from "react"
import Panel from "../Panel"
import { t } from "i18next"

// icons: https://www.svgrepo.com/
const techs = {
    Typescript: {
        icon: "tech/ts.svg",
        url: "https://www.typescriptlang.org/"
    },
    React: {
        icon: "tech/react.svg",
        url: "https://react.dev/"
    },
    Java: {
        icon: "tech/java.svg",
        url: "https://www.java.com/de/"
    },
    Python : {
        icon: "tech/py.svg",
        url: "https://www.python.org/",
    },
    Haskell : {
        icon: "tech/hs.svg",
        url: "https://www.haskell.org/",
    },
    Racket : {
        icon: "tech/racket.svg",
        url: "https://racket-lang.org/",
    },
}

const Skills = (): ReactElement => {
    const techButtons = Object.entries(techs).map(([name, { icon, url }]) => {
        return (
            <Tooltip title={name} key={`tech_${name}`}>
                <IconButton  onClick={() => window.open(url, '_blank')?.focus()}>
                    <Avatar src={icon} className="symbol" imgProps={{style: {height: '24px', width: '24px'}}}/>
                </IconButton>
            </Tooltip>
        )
    })
    return (
        <Panel title={t('about.exp')} style={{ paddingBottom: 0 }}>
            <Typography>{t('about.expText')}</Typography>
            <div className="skillIcons">{...techButtons}</div>
        </Panel>
    )
}

export default Skills