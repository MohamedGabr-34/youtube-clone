import React from 'react';
import { categories } from '../utlis/constants';
import { Stack } from '@mui/material';
function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category) => {
        return (
          <button
            className="category-btn"
            style={{
              background: category.name === selectedCategory && '#fc1503',
              color: 'white',
            }}
            key={category.name}
            onClick={() => {
              setSelectedCategory(category.name);
            }}
          >
            <span
              style={{
                color: selectedCategory === category.name ? 'white' : 'red',
                marginRight: '15px',
              }}
            >
              {category.icon}
            </span>
            <span>{category.name}</span>
          </button>
        );
      })}
    </Stack>
  );
}

export default Sidebar;
