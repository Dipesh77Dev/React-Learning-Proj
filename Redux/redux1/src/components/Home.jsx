import React, { useState } from 'react';

import Logic from './Logic';
import UserData from '../components/User/UserData';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const Home = () => {
    const [toggle, setToggle] = useState(false);

    const handleChange = () => {
        setToggle(toggle);
    };

    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: '#E5E8E8', height: '90vh', marginTop: '30px' }} >
                    <Button variant="outlined" onClick={() => handleChange()}>{toggle ? <Logic /> : <UserData />}</Button>
                    {/* <Logic /> */}
                    {/* <Button variant="outlined"><UserData /></Button> */}
                </Box>
            </Container>
        </>
    )
}

export default Home