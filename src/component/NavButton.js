import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import { NavBotsContext } from '../Data/Tasks';
import { useContext } from 'react';
export default function ListButton() {
  const { navBots, setNavBots } = useContext(NavBotsContext);

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setNavBots(newAlignment);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
      <ToggleButtonGroup
        sx={{ display: 'flex', justifyContent: 'center' }}
        color="primary"
        value={navBots}
        exclusive
        onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value={navBots} onClick={() => setNavBots('all')}>All</ToggleButton>
      <ToggleButton value={navBots} onClick={() => setNavBots('done')}>Done</ToggleButton>
      <ToggleButton value={navBots} onClick={() => setNavBots('undone')}>Undone</ToggleButton>
    </ToggleButtonGroup>
</Box>  
  );
}
