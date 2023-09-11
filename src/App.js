import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

function App() {

  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:8000/Empl')
      .then(res => {
        setColumns(Object.keys(res.data[0]))
        setRecords(res.data)
      })
  }, [])
  const handleSubmit=(id)=>{
    const conf = window.confirm("Do You Want to Delete")
    if(conf){
      axios.delete('http://localhost:8000/Empl/'+id)
      .then(res=>{
        alert('records delete')
        navigate('/')
      })
      .catch(err=>console.log(err))
    }
  }

  return (
    <div className="App">
      <>
       <div className='container mt-4'>
        <Link to='/create'><button className='btn btn-primary end'>Add +</button></Link>
       <table className='table'>
          <thead>
            <tr>
              {columns.map((c, i) => 
                <td key={i}>{c}</td>
              )}
               <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              records.map((d,i) => 
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>
                   <Link to={`edit/${d.id}`}> <button className='btn btn-success btn-sm'>Update</button></Link>
                    <button onClick={e=>handleSubmit(d.id)} className='btn btn-danger btn-sm ms-1'>Delete</button>
                  </td>
                </tr>
              )
            }

          </tbody>
        </table>
       </div>

      </>
    </div>
  );
}

export default App;
