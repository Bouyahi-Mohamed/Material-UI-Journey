import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function Title() {
  return (
    <Box sx={{ textAlign: 'center',}}>
      <Typography sx={{py: 2 ,color: "#3b4d72ff" }} variant="h3">My tasks</Typography>
    </Box>
  );
}