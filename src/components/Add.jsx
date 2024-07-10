import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import react,{useState} from 'react'

const Add = ({person}) => {
    // const [count,setCount]=useState(0);
    // let valueAdd=()=>{
    //     setCount(count+1)
    // }
    const [form,setForm]=useState(
      {
        fname:person.fname,
        department:person.department,
        semester:person.semester
      }
    )

    function valueCap(e){
      // console.log(e)
      setForm({...form,[e.target.name]:e.target.value})
    }
    let valueAdd=()=>{
      console.log(form)

    }

    return (
    
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', width: '25ch', gap: '16px',paddingLeft:"45%"}}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="name"
        label="Name"
        variant="filled"
        name="fname"
        value={form.fname}
        onChange={valueCap}
        InputProps={{ sx: { backgroundColor: 'white',color:'grey' } }}
        InputLabelProps={{ sx: { color: 'black' } }}
       
      />
      <TextField
        id="department"
        label="Department"
        variant="filled"
        name="department"
        value={form.department}
        onChange={valueCap}
        InputProps={{ sx: { backgroundColor: 'white',color:'grey' } }}
        InputLabelProps={{ sx: { color: 'black' } }}
        
        
      />
      <TextField
        id="semester"
        label="Semester"
        variant="filled"
        name="semester"
        value={form.semester}
        onChange={valueCap}
        InputProps={{ sx: { backgroundColor: 'white',color:'grey' } }}
        InputLabelProps={{ sx: { color: 'black' } }}
        
        
      />
      <Stack spacing={2} direction="row">
      <Button 
      onClick={valueAdd}
      variant="Contained" 
      sx={{backgroundColor:"grey"}}>
        REGISTER
        </Button>
        {/* <small>count is {count}</small> */}
    </Stack>
    </Box>
  )
}

export default Add;

