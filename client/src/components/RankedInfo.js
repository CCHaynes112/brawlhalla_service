import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
    root: {

    },
    paper: {
        height: 250,
    },

    content: {
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between"
    },

    rankImg: {
        width: "60%"
    },

    rankFields: {
        textAlign: "left",
    },

    rankValues: {
        textAlign: "right",
    },
    container2v2: {
        overflowY: "scroll",
        height: 250,
    }
}));


export default function RankedInfo(props) {
    const classes = useStyles();

    let rankedContent;

    // If Ranked 1v1
    if (props.type === "1v1") {
        rankedContent = (
            <Paper className={classes.paper}>
                <Grid container className={classes.content}>
                    <Grid item>
                        <Typography variant="h6">{props.playerName}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">Rank {props.type}</Typography>
                    </Grid>
                </Grid>
                <Divider light />
                <Grid container className={classes.content}>
                    <Grid item lg={4}>
                        <img src={props.rankedImg} alt="Rank" className={classes.rankImg} />
                    </Grid>
                    <Grid item lg={3} className={classes.rankFields}>
                        <Typography variant="body1">Region</Typography>
                        <Typography variant="body1">Rank</Typography>
                        <Typography variant="body1">Peak Rating</Typography>
                        <Typography variant="body1">Current Rating</Typography>
                        <Typography variant="body1">Games</Typography>
                        <Typography variant="body1">Wins</Typography>
                        <Typography variant="body1">Losses</Typography>
                    </Grid>
                    <Grid item lg={5} className={classes.rankValues}>
                        <Typography variant="body1">{props.region}</Typography>
                        <Typography variant="body1">{props.rank}</Typography>
                        <Typography variant="body1">{props.peakRating}</Typography>
                        <Typography variant="body1">{props.currentRating}</Typography>
                        <Typography variant="body1">{props.games}</Typography>
                        <Typography variant="body1">{props.wins}</Typography>
                        <Typography variant="body1">{props.losses}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
    // If Ranked 2v2
    else {
        rankedContent = (
            <div className={classes.container2v2}>
                {props.teams.map((team, key) => (
                    <Paper className={classes.paper} key={key}>
                        <Grid container className={classes.content}>
                            <Grid item>
                                <Typography variant="h6">{team.members}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">Rank {props.type}</Typography>
                            </Grid>
                        </Grid>
                        <Divider light />
                        <Grid container className={classes.content}>
                            <Grid item lg={4}>
                                <img src={team.rankedImg} alt="Rank" className={classes.rankImg} />
                            </Grid>
                            <Grid item lg={3} className={classes.rankFields}>
                                <Typography variant="body1">Region</Typography>
                                <Typography variant="body1">Rank</Typography>
                                <Typography variant="body1">Peak Rating</Typography>
                                <Typography variant="body1">Current Rating</Typography>
                                <Typography variant="body1">Games</Typography>
                                <Typography variant="body1">Wins</Typography>
                                <Typography variant="body1">Losses</Typography>
                            </Grid>
                            <Grid item lg={5} className={classes.rankValues}>
                                <Typography variant="body1">{team.region}</Typography>
                                <Typography variant="body1">{team.rank}</Typography>
                                <Typography variant="body1">{team.peakRating}</Typography>
                                <Typography variant="body1">{team.currentRating}</Typography>
                                <Typography variant="body1">{team.games}</Typography>
                                <Typography variant="body1">{team.wins}</Typography>
                                <Typography variant="body1">{team.losses}</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                ))}
            </div>
        );
    }

    return (
        <div className={classes.root}>
            {rankedContent}
        </div>
    );
}