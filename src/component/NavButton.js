import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';

export default function ListButton() {
  const [alignment, setAlignment] = React.useState('all');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
      <ToggleButtonGroup
        sx={{ display: 'flex', justifyContent: 'center' }}
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="all">all</ToggleButton>
      <ToggleButton value="done">done</ToggleButton>
      <ToggleButton value="undone">undone</ToggleButton>
    </ToggleButtonGroup>
</Box>  
  );
}
