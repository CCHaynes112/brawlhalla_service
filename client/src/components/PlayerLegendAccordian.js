import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import BarChart from './charts/BarChart';
import DoughnutChart from './charts/DoughnutChart';
import PieChart from './charts/PieChart';

import overviewLegendImg from './assets/img/legend_art/31.png';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    subContainer: {
        alignItems: "center",
    },
    heading: {
        display: "flex",
        alignItems: "center",
    },
    headingTitle: {
        marginLeft: 15,
    },
    chartContainer: {
        justifyContent: "space-between",
    },
    button: {

    }
}));

export default function PlayerLegendAccordian(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                props.legends.map((legend, key) =>
                    <ExpansionPanel key={key}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Grid container className={classes.subContainer}>
                                <Grid item sm={3} className={classes.heading}>
                                    <Avatar src={require(`./assets/img/legend_art/${legend.legend_id}.png`)} />
                                    <Typography variant="h6" className={classes.headingTitle}>{legend.legend_name_key}</Typography>
                                </Grid>
                                <Grid item sm={3}>
                                    <Typography variant="body1">{"Level: " + legend.level}</Typography>
                                </Grid>
                                <Grid item sm={3}>
                                    <Typography variant="body1">
                                        {"Win Rate: " + Math.round((legend.wins / legend.games) * 100) + "%"}
                                    </Typography>
                                </Grid>
                                <Grid item sm={3}>
                                    <Typography variant="body1">{"Games: " + legend.games}</Typography>
                                </Grid>
                            </Grid>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container className={classes.chartContainer}>
                                <Grid item lg={2}>
                                    <Typography variant="body1">Match Time: {legend.matchtime}</Typography>
                                    <Typography variant="body1">Games: {legend.games}</Typography>
                                    <Typography variant="body1">Wins: {legend.wins}</Typography>
                                    <Typography variant="body1">Losses: {legend.games - legend.wins}</Typography>
                                    <Typography variant="body1">Kills: {legend.kos}</Typography>
                                    <Typography variant="body1">Deaths: {legend.falls}</Typography>
                                    <Typography variant="body1">Suicides: {legend.suicides}</Typography>
                                    <Button className={classes.button} variant="contained" color="secondary">Submit</Button>
                                </Grid>
                                <Grid item lg={2}>
                                    <DoughnutChart
                                        title="Win/Loss"
                                        labels={["Wins", "Losses"]}
                                        values={[legend.wins, legend.games - legend.wins]}
                                    />
                                </Grid>
                                <Grid item lg={2}>
                                    <BarChart
                                        title="Damage Breakdown"
                                        labels={["Damage Given", "Damage Taken"]}
                                        values={[legend.damagedealt, legend.damagetaken]}
                                    />
                                </Grid>
                                <Grid item lg={2}>
                                    <PieChart
                                        title="Damage Breakdown"
                                        labels={["Primary", "Secondary", "Unarmed", "Thrown", "Gadget"]}
                                        values={[legend.damageweaponone, legend.damageweapontwo, legend.damageunarmed, legend.damagethrownitem, legend.damagegadgets]}
                                    />
                                </Grid>
                                <Grid item lg={2}>
                                    <PieChart
                                        title="K/D/S"
                                        labels={["Kills", "Deaths", "Suicides"]}
                                        values={[legend.kos, legend.falls, legend.suicides]}
                                    />
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )
            }

        </div>
    );
}