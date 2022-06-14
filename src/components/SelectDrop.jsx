import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';


export default function SelectDrop() {
  const [formValue, setFormValue] = React.useState({
    degree: "",
    department: "",
    semester: "",
    year: "",

  });
 const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
   
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValue);
  }
let{degree,department,semester}=formValue;
  return (
    <>
    <div className='select_con'>
<div>
    <Box sx={{marginTop:10, minWidth: 120 ,width:460 }}>
      <FormControl  fullWidth>
        <InputLabel id="demo-simple-select-label">Degree</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={degree}
          label="Degree"
          name="degree"
          onChange={handleChange}
        >
          <MenuItem value={"btech"}>B Tech</MenuItem>
          <MenuItem value={"be"}>BE</MenuItem>
        </Select>
      </FormControl>
      </Box>
    <Box sx={{marginTop:4, minWidth: 120 ,width:460 }}>
      <FormControl  fullWidth>
        <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={department}
          name="department"
          label="Department"
          onChange={handleChange}
        >
          <MenuItem value={"it"}>Information Technology</MenuItem>
          <MenuItem value={"cs"}>Computer Science</MenuItem>
          <MenuItem value={"ece"}>Electronics and Communiction Engineering</MenuItem>
          <MenuItem value={"ce"}>Civil Engineering</MenuItem>
          <MenuItem value={"eee"}>Electrical and Electronics Engineering</MenuItem>
        </Select>
      </FormControl>
      </Box>
    
    
    <Box sx={{marginTop:4, minWidth: 120 ,width:460 }}>
      <FormControl  fullWidth>
        <InputLabel id="demo-simple-select-label">Semester</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={semester}
          name="semester"
          label="Semester"
          onChange={handleChange}
        >
          <MenuItem value={"1"}>Semester 1</MenuItem>
          <MenuItem value={"2"}>Semester 2</MenuItem>
          <MenuItem value={"3"}>Semester 3</MenuItem>
          <MenuItem value={"4"}>Semester 4</MenuItem>
          <MenuItem value={"5"}>Semester 5</MenuItem>
          <MenuItem value={"6"}>Semester 6</MenuItem>
          <MenuItem value={"7"}>Semester 7</MenuItem>
          <MenuItem value={"8"}>Semester 8</MenuItem>
        </Select>
      </FormControl>
      </Box>
    
    </div>
    <div className='radio_con'>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Regulation</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="2018"
        onChange={handleChange}
        name="year"
        // name="radio-buttons-group"
      >
        <FormControlLabel value="2018" control={<Radio />} label="2018" />
        <FormControlLabel value="2020" control={<Radio />} label="2020" />
      </RadioGroup>
    </FormControl>
    </div>
    
      </div> <center><Box sx={{marginTop:4, minWidth: 120 ,width:460 }}>
      <Button onClick={handleSubmit} color="secondary" variant="contained">Next</Button>
      </Box>
      </center>
      </>
  );
}
