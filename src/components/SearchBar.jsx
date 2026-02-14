import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
function SearchBar() {
  const [searchterm, setserachTerm] = useState();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (searchterm) {
      navigate(`/search/${searchterm}`);
      setserachTerm(' ');
    }
  }
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="search..."
        value={searchterm}
        onChange={(e) => {
          setserachTerm(e.target.value);
        }}
      />
      <IconButton
        type="submit"
        sx={{ p: '10px', color: 'red' }}
        aria-label="Search"
      >
        <Search></Search>
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
