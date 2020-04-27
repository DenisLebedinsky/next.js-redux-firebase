import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { useDispatch } from 'react-redux'
import { addBuildingRequest } from '../src/redux/buildings/actions';


const fakedata = {
  title: 'test add date',
  description: 'test description',
  categoryId: "1557997038230",
  email: "den.lebedinsky@gmail.com",
  phone: "+7 (909) 456-06-14",
  price: 10000000,
  active: true,
  location: "1557310133214",
  district: 'test district',
  realtObject: "1557310060791",
  area: 300,
  floor: 2,
  type: "sell",//rent
}

export default function About() {

  const dispatch = useDispatch();

  const addNewBuilding = () => {
    dispatch(addBuildingRequest(fakedata))
  }

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={addNewBuilding}
        >
          ADD
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
