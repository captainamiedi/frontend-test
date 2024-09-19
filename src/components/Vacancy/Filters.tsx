import React, { useState, useCallback } from 'react';
import { Grid, TextField, Button } from '@mui/material';

const Filters: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [skills, setSkills] = useState<string>('');

  const handleSearch = useCallback(() => {
    console.log(`City: ${city}, Skills: ${skills}`);
    // Call an API or perform filtering logic here.
  }, [city, skills]);

  return (
    <Grid container spacing={2} sx={{ marginBottom: 2 }}>
      <Grid item xs={5}>
        <TextField
          label="City"
          variant="outlined"
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          label="Skills"
          variant="outlined"
          fullWidth
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" color="primary" fullWidth onClick={handleSearch} aria-label="Search vacancies">
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filters;
