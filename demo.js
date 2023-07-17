/* eslint-disable no-use-before-define */
import React from 'react';
import{ Autocomplete, TextField, createFilterOptions } from '@mui/material';

const filterOptions = createFilterOptions({
  // matchFrom: 'start',
  stringify: (option) => option.title + option.text,
});

export default function Filter() {
  return (
    <Autocomplete
      id="filter-demo"
      multiple={true}
      filterSelectedOptions={true}
      options={top100Films}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Custom filter" variant="outlined" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994, text: 'xxx' },
  { title: 'The Dark Knight', year: 2008, text: '1231' },
  { title: '12 Angry Men', year: 1957, text: 'yyy' },
  { title: "Schindler's List", year: 1993, text: 'zzz' },
];
