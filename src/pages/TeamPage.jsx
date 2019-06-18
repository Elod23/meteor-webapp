import React from 'react';
import {makeStyles} from "@material-ui/core";
import {red} from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    card:{
        maxWidth: 345,
    },
    media: {
        height:0,
        paddingTop: '56.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));



export const TeamPage = () => {
    const classes = useStyles();
    const memberList = [{name : "Varga Iosif", title : "CEO", image : "image1", description : "The founder of the firm"},
        {name : "Varga Elod", title : "CEO", image : "image1", description : "The founder of the firm"},
        {name : "Korosi Sandor", title : "CEO", image : "image1", description : "The founder of the firm"},
        {name : "Nagy Attila", title : "CEO", image : "image1", description : "The founder of the firm"}];

    const cardList = memberList.map(member => {
        return(
            <Card className={classes.card} key={member.name}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Employee" className={classes.avatar}>
                            {member.name.charAt(0)}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="Settings">
                        </IconButton>
                    }
                    title={member.name}
                    subheader={member.title}
                />
                <CardMedia className={classes.media}
                           image={member.image}
                           title={member.name} />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {member.description}
                    </Typography>
                </CardContent>
            </Card>)
    });
    return(<div className="container align-left">
                {cardList}
    </div>)
};