import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useFilters } from '../../hooks/useFilters';
import AutoCompleteComponent from './AutoCompleteComponent';
import { autoCompleteOptions } from '../../utils/helper';
import { Option } from '../../types/vacancyTypes';

const SearchBar: React.FC = () => {
  const { city, setCity, skills, setSkills, handleSearch, handleSetSkills } = useFilters();

  return (
    <Box sx={{ display: { xs: 'block', md: 'flex', gap: 2 }, gap: 2, marginBottom: 4, paddingTop: '5rem' }}>
      <AutoCompleteComponent
        value={skills} 
        setValue={(newValue: Option) => handleSetSkills(newValue)} 
        options={autoCompleteOptions as Option[]} // Ensure options is of type Option[]
        label='Навык'
        placeholder='Навык'
      />
      <TextField
        label="Город"
        variant="outlined"
        value={city}
        fullWidth
        onChange={(e) => setCity(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch} fullWidth>
        Поиск
      </Button>
    </Box>
  );
};

export default SearchBar;
