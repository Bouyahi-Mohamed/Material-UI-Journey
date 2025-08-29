import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { DisplaySettings } from '@mui/icons-material';

export default function RootContainer({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <GlobalStyles styles={{ body: { backgroundColor: '#000' , display: 'flex', justifyContent: 'center', alignItems: 'center' } }} />
      <Container maxWidth="sm">
        <Box sx={{  bgcolor: '#ffffffff', minHeight: '80vh', borderRadius: '8px', boxShadow: 3, my:3}}>
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}