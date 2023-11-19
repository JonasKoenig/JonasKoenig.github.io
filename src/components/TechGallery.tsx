import { Avatar, Box, IconButton, Tooltip } from "@mui/material"
import { ReactElement } from "react"

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

const TechGallery = (): ReactElement => {
    const techButtons = Object.entries(techs).map(([name, { icon, url }]) => {
        return (
            <Tooltip title={name} key={`tech_${name}`}>
                <IconButton onClick={() => window.open(url, '_blank')?.focus()}>
                    <Avatar src={icon} variant="square" sx={{ width: 28, height: 28 }}></Avatar>
                </IconButton>
            </Tooltip>
        )
    })
    return <Box>{...techButtons}</Box>;
}

export default TechGallery