import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { FieldArray, Form, Field, Formik } from "formik";
import { TextField } from "@mui/material";
import * as yup from "yup";
import Note from "./Note";
import { useState } from "react";
import uniqid from "uniqid";

// dirty use dirty use dirty for errors capture

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

export default function Muimodal(prop) {

  
  //formik empty values
   const initialValues={
    first_name:'',
    last_name:'',
    email:'',
    note:[0],
    }
  
  const arrayHelpersRef = useRef(null);
 

  const open = prop.open;
  const handleClose = () => {
    prop.demand(false);
  };

  const pulldata = (data) => {
    console.log(data)
  };



  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Formik
        initialValues={initialValues}
       
        onSubmit={(values) => {
       console.log(values)
  
        }}
        enctype="multipart/form-data"
      >
        {({  handleChange, handleSubmit }) => {
          return (
            <Form>
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Create New User
                </Typography>

                <FieldArray
                  name='note[0]'
                  render={(arrayHelpers) => {
                    arrayHelpersRef.current=arrayHelpers;
                    const { push, form } = arrayHelpers;
                    
                   
                            
                    return (
                      <div>
                        {values.note.map((val, index) => {
                          {console.log("note map function output",val,index);}
                          return (
                            <div>
                              <Note
                                fun={push}
                                index={index}
                                formik={{ values }}
                                handleChange={handleChange}
                                handleSubmit={handleSubmit}
                                pulldata={pulldata}
                              />
                              <div className="spacer"></div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  }}
                />  
                <br></br>

                <Button
                  type="submit"
                  onClick={handleSubmit}
                  onFocus={handleSubmit}
                  variant="contained"
                  size="large"
                >
                  Submit
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
}
