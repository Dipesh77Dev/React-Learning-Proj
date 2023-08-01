import React from 'react';
import Logic from './Logic';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Home = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: '#E5E8E8', height: '90vh', marginTop: '30px' }} >
                    <Logic />
                </Box>
            </Container>
        </>
    )
}

export default Home