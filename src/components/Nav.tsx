import { useTranslation } from 'react-i18next';
import { Tabs, Tab, TabOwnProps, Box, Theme, useMediaQuery, Typography, TypographyOwnProps } from '@mui/material';
import { useUrlState } from '../core/State';

const Header = ({label, ...props}: {label: string} & TypographyOwnProps) => (
    <Typography variant="h1" fontWeight={700} align="center" {...props}>
        {label}
    </Typography>
);

type NavProps = {
    tabs: Record<string, TabOwnProps & { content: JSX.Element[] }>
}

const Nav = ({tabs}: NavProps) => {
    const [active, setActive] = useUrlState('p', 'game');
    const {t} = useTranslation();
    const isMobile = useMediaQuery((t: Theme) => t.breakpoints.down('sm'));
    const {content} = tabs[active];

    const navTabs = Object.entries(tabs).map(([name, {content, ...props}]) => {
        const l = isMobile ? undefined : t(`${name}.tab`)
        props.iconPosition = 'start';
        return <Tab value={name} {...props} label={l} key={`nav-tab-${name}`} />
    })
    return (
        <>
            <Box className="navContent" key="nav-content">
                <Header label={t(`${active}.header`)} key="nav-header" />
                {content}
            </Box>
            <Tabs 
                value={active} 
                onChange={(_, a) => setActive(a)}
                variant='fullWidth'
                TabIndicatorProps={{sx:{top:0}}}
            >
                {navTabs}
            </Tabs>
        </>    
    )
}

export default Nav;