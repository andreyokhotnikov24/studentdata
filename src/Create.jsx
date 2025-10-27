import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

export default function Create() {
  
  const [values, setValues] = useState({
    name: '',
    place: '',
    phone: ''
  })

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/users", values)
    .then(res => {
      console.log(res);
      navigate('/home')
    })
    .catch(err => console.log(err));
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter Name' 
            onChange={e => setValues({...values, name: e.target.value})}/>
          </div>
          <div className='mb-2'>
            <label htmlFor='place'>Place:</label>
            <input type='text' name='place' className='form-control' placeholder='Enter Place'
            onChange={e => setValues({...values, place: e.target.value})}/>
          </div>
          <div className='mb-2'>
            <label htmlFor='phone'>Phone:</label>
            <input type='text' name='phone' className='form-control' placeholder='Enter Phone'
            onChange={e => setValues({...values, phone: e.target.value})}/>
          </div>
          <button className='btn btn-success'>Submit</button>
          <Link to='/home' className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  )
}