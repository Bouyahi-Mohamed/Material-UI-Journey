import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function Title() {
  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Typography sx={{ fontWeight: 'bold', pt: 2 }} variant="h3">Todo List</Typography>
    </Box>
  );
}