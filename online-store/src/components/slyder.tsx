import * as React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import'./aside.scss';

function valuetext(value: number) {
  return `${value}$`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([80, 400]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        min={80}
        step={1}
        max={400}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
