import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function RootContainer({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <GlobalStyles styles={{ body: { backgroundColor: '#000' } }} />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#ffffffff', minHeight: '100vh' }}>
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}