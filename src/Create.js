import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Create = () => {

  const[inputData,setInputData]=useState({name:'',email:''})
  const navigate = useNavigate();

  function handleSubmi(e){
    e.preventDefault()
    axios.post('http://localhost:8000/Empl',inputData)
    .then(res =>{
        console.log(res)
        alert('successfully Create')
        navigate('/');
    }).catch(err=>console.log(err))

  }

    


  return (
   <>
   <div className='create'>
    <form onSubmit={handleSubmi}>
        <h2>Create Employe</h2>
        <input type='text'placeholder='Name'  onChange={(e)=>setInputData({...inputData,name: e.target.value})}></input><br /><br />
        <input type='email'placeholder='Email'  onChange={(e)=>setInputData({...inputData,email: e.target.value})}></input><br /><br />
        <button  className='submit'>Submit</button>
    </form>
   </div>
   </>
  )
}

export default Create