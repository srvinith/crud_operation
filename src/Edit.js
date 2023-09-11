import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Edit = () => {

    const {id} =useParams();
    const[data,setData] =useState([])
    const navigate=useNavigate();

    useEffect(()=> {
        axios.get('http://localhost:8000/Empl/'+id)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    }, [id])

    const handleSubmit =(e)=>{
        e.preventDefault()

        axios.put('http://localhost:8000/Empl/'+id,data)
        .then(res=>{
            alert('data add successfullly')
            navigate('/')
        })
        .catch(err=>console.log(err))
    }

  return (
    <>
   <div className='create'>
    <form onSubmit={handleSubmit}>
        <h2>Update Employe</h2>
        <input type='text'placeholder='Name' name='name' value={data.name} onChange={e=>setData({...data,name:e.target.value})}></input><br /><br />
        <input type='email'placeholder='Email' name='email' value={data.email} onChange={e=>setData({...data,email:e.target.value})}></input><br /><br />
        <button  className='submit'>Submit</button>
        
    </form>
   </div>
   </>
  )
}

export default Edit