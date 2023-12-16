import { useTranslation } from 'react-i18next';
import { Tabs, Tab, TabOwnProps, Box, Theme, useMediaQuery, Typography, TypographyOwnProps } from '@mui/material';
import { useUrlState } from '../core/State';

export const Header = ({ label, ...props }: { label: string } & TypographyOwnProps) => (
    <Typography variant="h1" fontWeight={650} align="center" sx={{ zIndex: 5, mb: '-2px' }} {...props}>
        {label}
    </Typography>
);

type NavProps = {
    tabs: Record<string, TabOwnProps & { content: JSX.Element }>
}

const Nav = ({ tabs }: NavProps) => {
    const [active, setActive] = useUrlState('p', 'game');
    const { t } = useTranslation();
    const isMobile = useMediaQuery((t: Theme) => t.breakpoints.down('sm'));
    const { content } = tabs[active];

    const navTabs = Object.entries(tabs).map(([name, { content, ...props }]) => {
        const l = isMobile ? undefined : t(`${name}.tab`)
        props.iconPosition = 'start';
        return <Tab value={name} {...props} label={l} key={`nav-tab-${name}`} />
    })

    return (
        <>
            {/* <Box className="content">
                <Header label={t(`${active}.header`)} /> */}
                {content}
            {/* </Box> */}
            <Box className='nav'>
                <Tabs
                    value={active}
                    onChange={(_, a) => setActive(a)}
                    variant='fullWidth'
                    sx={{ maxWidth: '600px', margin: 'auto' }}
                    TabIndicatorProps={{ sx: { top: 0 } }}
                >
                    {navTabs}
                </Tabs>
            </Box>
        </>
    )
}

export default Nav;