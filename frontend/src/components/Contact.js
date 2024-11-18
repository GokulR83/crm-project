
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { table_fields } from '../helpers/helpers';
import useContact from '../hooks/useContact';
import { Button, FormControl, InputLabel, MenuItem, Pagination, Select, Stack } from '@mui/material';
import { useState } from 'react';
import AddContactPopUp from './AddContactPopUp';
import EditContactPopUp from './EditContactPopUp';
import { Toaster } from 'react-hot-toast';

const Contact = () => {
    const url = process.env.REACT_APP_API_URL;
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit ] = useState(false);
    const [page, setPage ] = useState(1);
    const [sort, setSort] = useState('');
    const [currentContact, setCurrentContact ] = useState({});

    const {contact , deleteContact, addContact, editContact, getContact, sorting } = useContact(url);

    const handleDelete = (id) =>{deleteContact(id)};
    const handleAdd = (newContact) =>{addContact(newContact)};
    const handleEditUpdate = (editedContact, id) => { editContact(editedContact, id) };

    const handleClickOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};

    const handleEditClickOpen = (d) => {
      console.log(d);
      setCurrentContact({ ...currentContact, ...d});
      setOpenEdit(true);
    };
    const handleEditClose = () => {setOpenEdit(false)};

    const handlePageCountChange = (event,value) =>{
      getContact(value);
      setPage(value);
    }
    

  const handleSortChange = (event) => {
    setSort(event.target.value);
    sorting(event.target.value);
  };

  return (
    <div style={{
      width:"100%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      gap:15,
    }}>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <div style={{
        width:"100%",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
    }}>
      <h1>Contact Information</h1>
      <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">sort</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={sort}
        label="sort"
        onChange={handleSortChange}
      >
        <MenuItem value="Default">
          <em>Default</em>
        </MenuItem>
        <MenuItem value={"phoneNumber"}>Sort by Phone</MenuItem>
        <MenuItem value={"email"}>Sort by email</MenuItem>
        <MenuItem value={"company"}>Sort by Company</MenuItem>
      </Select>
    </FormControl>
    </div>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>Add</Button>
        <AddContactPopUp  handleClose={handleClose} handleAdd={handleAdd} open={open} />
      </div>
      </div>
      <TableContainer>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
                  {
                    table_fields.map((item)=><TableCell key={item}>{item}</TableCell>)
                  }
            </TableRow>
          </TableHead>
          <TableBody>
              {
                contact?.map((d)=>{
                  return(
                    <TableRow key={d?._id}>
                      <TableCell>{d?.firstName}</TableCell>
                      <TableCell>{d?.lastName}</TableCell>
                      <TableCell>{d?.email}</TableCell>
                      <TableCell>{d?.phoneNumber}</TableCell>
                      <TableCell>{d?.company}</TableCell>
                      <TableCell>{d?.jobTitle}</TableCell>
                      <TableCell>
                        <div >
                        <Button key={d?._id} variant="outlined" onClick={()=>handleEditClickOpen(d)}>Edit</Button>
                        <EditContactPopUp handleEditClose={handleEditClose} handleEditUpdate={handleEditUpdate} openEdit={openEdit} editContactDetails={currentContact} />
                        </div>
                        <Button  size='small' variant="outlined" color="error"
                        onClick={()=>handleDelete(d?._id)}
                        >Delete</Button>
                      </TableCell>
                    </TableRow>
                  )
                })
              }
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2}>
      <Pagination count={8} page={page} variant="outlined" color="primary" onChange={handlePageCountChange}/>
    </Stack>
    </div>
  )
}

export default Contact;