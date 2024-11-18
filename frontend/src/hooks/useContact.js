import { useEffect, useState } from "react"
import toast from 'react-hot-toast';

const useContact = (url) =>{
    const [ contact, setContact ] = useState([]);

    useEffect(()=>{
        getContact(1,5);
    },[]);

    const getContact = async(page,limit = 5) =>{
        try {
            const data = await fetch(`${url}/contact/all?page=${page}&limit=${limit}`);
            const json = await data.json();
            if(json.data !== undefined )
            setContact(json?.data);
          else
          toast.success(json?.message);
        } catch (error) {
            toast.error(error.message);
        }
    }

    const deleteContact = async(id) =>{
      try {
        const data = await fetch(`${url}/contact/${id}`,{
          method:"DELETE"
        });
        const json = await data.json();
        toast.success(json?.message);
        setContact((prevContacts) =>prevContacts.filter((contact) => contact._id !== id));
      } catch (error) {
        toast.error(error.message);
      }
    }
    const addContact = async(data) =>{
      try {
        const response = await fetch(`${url}/contact`,{
          method:"POST",
          headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
        })
        const json = await response.json();
        toast.success(json?.message);
        setContact((prevContacts)=> [...prevContacts, json?.data ])
      } catch (error) {
        toast.error(error.message);
      }
    }

    const editContact = async(data, id) =>{
      try {
        const response = await fetch(`${url}/contact/${id}`,{
          method:"PUT",
          headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
        })
        const json = await response.json();
        toast.success(json?.message);
         setContact((prevContacts) =>
        prevContacts.map((contact) =>
          contact._id === id ? json.data : contact
        )
      );
      } catch (error) {
        toast.error(error.message);
      }
    }

    const sortContacts = (key) => {
    const sortedContacts = [...contact].sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];
      if (valueA < valueB) return -1;
      if (valueA > valueB) return 1;
      return 0;
    });
    setContact(sortedContacts);
  };

  const sorting = (key) =>{
    if(key == "phoneNumber"){
      sortContacts('phoneNumber');
    }
    else if(key == "company"){
      sortContacts('company');
    }
    else if(key == "email"){
      sortContacts('email');
    }
    else{
      sortContacts('firstName');
    }
  }
    return { contact, deleteContact, addContact, editContact, getContact, sorting };
}

export default useContact;