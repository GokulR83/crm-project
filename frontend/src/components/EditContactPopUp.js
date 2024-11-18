import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'

const EditContactPopUp = ({ handleEditClose, handleEditUpdate , openEdit, editContactDetails }) => {
  const [formdata, setFormData ] = useState(editContactDetails);
  const [id, setId ] = useState(editContactDetails?._id);
  useEffect(()=>{
    if(Object.keys(editContactDetails).length !== 0)
      setFormData(editContactDetails);
      setId(editContactDetails._id);
  },[editContactDetails]);
  const handleChange = (e) => {
    setFormData((prevData) => ({...prevData, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <Dialog
        open={openEdit}
        onClose={handleEditClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            handleEditUpdate(formJson, id);
            handleEditClose();
          },
        }}
      >
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
        <TextField id="firstName" name="firstName" value={formdata.firstName} onChange={handleChange} label="First Name" variant="filled" fullWidth type='text' sx={{ marginBottom:2 }} />
        <TextField id="lastName" name='lastName' value={formdata.lastName} onChange={handleChange} label="Last Name" variant="filled" fullWidth type='text' sx={{ marginBottom:2 }} />
        <TextField id="email" name='email' value={formdata.email} onChange={handleChange} label="Email" variant="filled" fullWidth type='text' sx={{ marginBottom:2 }} />
        <TextField id="phoneNumber" name='phoneNumber' value={formdata.phoneNumber} onChange={handleChange} label="Phone Number" variant="filled" fullWidth type='text' sx={{ marginBottom:2 }} />
        <TextField id="company" name='company' value={formdata.company} onChange={handleChange} label="Company" variant="filled" fullWidth type='text' sx={{ marginBottom:2 }} />
        <TextField id="jobTitle" name='jobTitle' value={formdata.jobTitle} onChange={handleChange} label="Job Title" variant="filled" fullWidth type='text' sx={{ marginBottom:2 }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button type='submit'>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default EditContactPopUp;