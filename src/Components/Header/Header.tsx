import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundImage: 'url("images/bag1.jpg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: theme.spacing(8, 0, 6),

    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    whiteText: {
        color: '#fff',
        textShadow: '1px 1px 2px #000'
    },
}));


export default function Header() {
    const classes = useStyles();

    return <div className={classes.heroContent}>
        <Container maxWidth="sm">
            <Typography component="h1" variant="h1" align="center" className={classes.whiteText} gutterBottom>
                Паллада
            </Typography>
            <Typography variant="h5" align="center" className={classes.whiteText} paragraph>
                Мы оказываем широкий спектр юридических и посреднических услуг в сфере недвижимости
            </Typography>
            <div className={classes.heroButtons}>
                <Link href="/about">
                    <Typography variant="h5" align="center" className={classes.whiteText} paragraph>
                        подробнее...
                    </Typography>
                </Link>
            </div>
        </Container>
    </div >
}
