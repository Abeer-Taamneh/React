import React from 'react';
import TextField from '@mui/material/TextField';

function MyTextField({label,placeholder,value,setValue}) {
    return (
        <div className='row m-2'>
            <TextField 
            label={label}
            variant="filled" 
            color="success" 
            placeholder={placeholder}
            onChange={
                (e)=>setValue(e.target.value)
            }
            value={value}
            fullWidth
            />
        </div>
    );
}

export default MyTextField;