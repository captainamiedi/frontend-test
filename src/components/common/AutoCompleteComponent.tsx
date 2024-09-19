import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { AutoCompleteComponentProps, Option } from '../../types/vacancyTypes';

export default function AutoCompleteComponent({ options, value, setValue, label, placeholder }: AutoCompleteComponentProps) {
  return (
    <Autocomplete
      multiple
      id="tags-outlined"
      options={options}
      getOptionLabel={(option) => option.label}
      filterSelectedOptions
      fullWidth
      renderInput={(params) => (
        <TextField
          {...params}
          label={label as string}
          placeholder={placeholder as string}
        />
      )}
  />
  );
}
