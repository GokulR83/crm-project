import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React from 'react'

const AddContactPopUp = ({ handleClose, handleAdd , open }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            handleAdd(formJson);
            handleClose();
          },
        }}
      >
        <DialogTitle>Add Contact</DialogTitle>
        <DialogContent>
        <TextField id="firstName" name="firstName" label="First Name" variant="filled" fullWidth type='text' sx={{ marginBottom:2 }} />
        <TextField id="lastName" name='lastName' label="Last Name" variant="filled" fullWidth type='text' sx={{ marginBottom:2 }} />
        <TextField id="email" name='email' label="Email" variant="filled" fullWidth type='text' sx={{ marginBottom:2 }} />
        <TextField id="phoneNumber" name='phoneNumber' label="Phone Number" variant="filled" fullWidth type='text' sx={{ marginBottom:2 }} />
        <TextField id="company" name='company' label="Company" variant="filled" fullWidth type='text' sx={{ marginBottom:2 }} />
        <TextField id="jobTitle" name='jobTitle' label="Job Title" variant="filled" fullWidth type='text' sx={{ marginBottom:2 }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit'>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddContactPopUp;