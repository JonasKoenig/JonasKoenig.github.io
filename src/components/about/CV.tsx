import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Avatar, Typography } from "@mui/material";
import { ReactElement } from "react";
import Panel from "../Panel";
import { t } from "i18next";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const CV = (): ReactElement => {
    const sx = { backgroundColor: 'rgb(91, 82, 82)' };
    const cv = [
        {
            icon: <WorkIcon />,
            date: `2022 - ${t('about.today')}`,
            location: 'Reutlingen',
            occupation: 'Software Developer',
            institution: 'Baral Geohaus-Consulting',
        }, {
            icon: <SchoolIcon />,
            date: '2018 - 2021',
            location: 'Tübingen',
            occupation: `${t('about.cs')} M.Sc.`,
            institution: 'Eberhard Karls Universität',
        }, {
            icon: <SchoolIcon />,
            date: '2015 - 2018',
            location: 'Tübingen',
            occupation: `${t('about.cs')} B.Sc.`,
            institution: 'Eberhard Karls Universität',
        }, {
            icon: <VolunteerActivismIcon />,
            date: '2013 - 2014',
            location: 'Stuttgart',
            occupation: t('about.bufdi'),
            institution: 'Kinder- und Jugendhaus Hallschlag',
        }
    ];
    const timelineNodes = cv.map((node, index) => {
        const isLast = index === cv.length - 1;
        return (
            <TimelineItem key={`timeline-${node.occupation}`}>
                <TimelineOppositeContent>
                    <Typography>{node.date}</Typography>
                    <Typography variant="caption">{node.location}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <Avatar className="symbol">{node.icon}</Avatar>
                    {isLast ? null : <TimelineConnector className="symbol" />}
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>{node.occupation}</Typography>
                    <Typography variant="caption">{node.institution}</Typography>
                </TimelineContent>
            </TimelineItem>
        )
    });
    return (
        <Panel title={t('about.cv')}>
            <Timeline color="#848080">
                {timelineNodes}
            </Timeline>
        </Panel>
    )
}

export default CV;