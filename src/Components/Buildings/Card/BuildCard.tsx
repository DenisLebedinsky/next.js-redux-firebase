import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router'

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import {useDispatch} from 'react-redux';
import {deleteBuildingRequest} from '../../../redux/buildings/actions';
import {Building} from "../../../redux/buildings/types";


const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    price: {
        position: 'absolute',
        right: 20,
        bottom: 54,
        backgroundColor: theme.palette.primary.main,
        padding: '0 5px',
        borderRadius: 4,
        color: theme.palette.background.paper
    }
}));

export default function BuildCard({building}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const router = useRouter();

    const deleteBuilding = () => {
        dispatch(deleteBuildingRequest(building.id));
    }

    return <Grid item xs={12} sm={6} md={6}>

        <Card className={classes.card} onClick={() => router.push(`/building/${building.id}`)}>
            <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h5">
                    {building.title}
                </Typography>
                {/* <Typography>
                    This is a media card. You can use this section to describe the content.
                </Typography> */}
            </CardContent>
            {/* <CardActions>
                <Button size="small" color="primary">
                    View
                </Button>
                <Button size="small" color="primary">
                    Edit
                </Button>
                <IconButton aria-label="delete" onClick={deleteBuilding}>
                    <DeleteIcon />
                </IconButton>
            </CardActions> */}

            <Typography gutterBottom variant="subtitle1" className={classes.price}>
                {building.price}
            </Typography>
        </Card>
    </Grid>
}
