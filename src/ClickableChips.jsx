import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import App from './App';

export default function ClickableChips({value}) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label={value} onClick={() => {
            setCategory(value);
          }}  />
    </Stack>
  );
}