import React, { useEffect } from "react";
import { TextField, Button } from "@mui/material";
import uniqid from "uniqid";
export default function Note({
  fun,
  index,
  formik,
  handleChange,
  handleSubmit,
  pulldata,
  helperText,
  arr
}) {
  const setData=(e)=>{
    handleSubmit(e)
  }
   
  return (
    <>
      <div>
        <TextField
          required
          label="First Name"
          name={`first_name`}
          onChange={handleChange}
          
        />
        <span> </span>
        <TextField
          required
          label="Last Name"
          name={`last_name`}
          onChange={handleChange}
        
        />
        <span> </span>
        <TextField
          required
          label="Email"
          name={`email`}
          onChange={handleChange}
         
        />
        <span> </span>
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={setData}
        >
          add
        </Button>
      </div>
      <br></br>
    </>
  );
}
