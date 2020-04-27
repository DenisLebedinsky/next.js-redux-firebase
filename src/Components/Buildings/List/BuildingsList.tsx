import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Container from '@material-ui/core/Container';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BuildCard from '../Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
    getBuildingRequest
} from '../../../redux/buildings/actions';
import {
    buildingslistSelector,
    buildingsLoadingSelector,
    buildingsCountSelector
} from '../../../redux/buildings/selectors'
import Filter from '../Filter';
import {Building, Count} from "../../../redux/buildings/types";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardGrid: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
        row: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }
    }),
);

export default function BuildingsList() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const list: Building[] = useSelector(buildingslistSelector)
    const loading: boolean = useSelector(buildingsLoadingSelector)
    const count: Count = useSelector(buildingsCountSelector)

    useEffect(() => {
        if (!list.length && !loading && count?.value !== null) {
            dispatch(getBuildingRequest())
        }
    }, [list.length])

    return <Container className={classes.cardGrid} maxWidth="md">
        <Filter/>
        {loading &&
        <div className={classes.row}>
            <CircularProgress/>
        </div>}
        <Grid container spacing={4}>
            {list && list.map(building => <BuildCard key={building.id} building={building}/>)}
        </Grid>
    </Container>
}