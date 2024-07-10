import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Add = () => {
  return (
    
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', width: '25ch', gap: '16px',paddingLeft:"45%",paddingTop:"5%"}}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="filled"
        InputProps={{ sx: { backgroundColor: 'white' } }}
        InputLabelProps={{ sx: { color: 'black' } }}
       
      />
      <TextField
        id="department"
        name="department"
        label="Department"
        variant="filled"
        InputProps={{ sx: { backgroundColor: 'white' } }}
        InputLabelProps={{ sx: { color: 'black' } }}
        
        
      />
      <TextField
        id="sem"
        name="sem"
        label="Semester"
        variant="filled"
        InputProps={{ sx: { backgroundColor: 'white' } }}
        InputLabelProps={{ sx: { color: 'black' } }}
        
        
      />
      <Stack spacing={2} direction="row">
      <Button 
      variant="Contained" 
      sx={{backgroundColor:"grey"}}>
        REGISTER
        </Button>
    </Stack>
    </Box>
  )
}

export default Add;

