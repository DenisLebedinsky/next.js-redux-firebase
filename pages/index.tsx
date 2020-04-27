import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head'
import Header from '../src/Components/Header/Header';
import BuildingsList from '../src/Components/Buildings/List';
import Footer from '../src/Components/Footer/Footer';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  page: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  body: {
    flex: 1,
    background: '#fff'
  }
}));

export default function Album() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Pallada</title>
        <link rel="icon" href="/controller-logo.ico" />
      </Head>
      <div className={classes.page}>
        <CssBaseline />
        {/* <AppBar /> */}
        <div className={classes.body}>

          <main>
            <Header />
            <BuildingsList />
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}
