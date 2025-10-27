import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

export default function EditStudent(){
    const {studentId} = useParams()
    console.log("studentId=", studentId)

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [place, setPlace] = useState("")
    const [phone, setPhone] = useState("")
    const [validation, setValidation] = useState(false)

    const navigate = useNavigate();
 // const [studentData, setStudentData] = useState({})

    useEffect(() => {
        fetch("http://localhost:3000/students/" + studentId)
        .then((res) => res.json())
        .then((data) => {
            console.log("---data---",data)
            setId(data.id)
            setName(data.name)
            setPlace(data.place)
            setPhone(data.phone)
        })
        .catch(err => console.log(err.message))
    },[])

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("-----handleSubmit------", {id,name,place,phone})
        const studentData = {id,name,place,phone}

        fetch("http://localhost:3000/students/" + studentId, {
            method: 'PUT',
            headers: {
                "content-type": "application-json"
            },
            body: JSON.stringify(studentData)
        })
        .then((res) => {
            console.log(res);
            alert("Studen Data updated successfully");
            navigate("/");
        })
        .catch((err) => console.log(err.message))

    }

    return(
       
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Edit Student Details</h1>
                <form onSubmit={handleSubmit}>
                     <div className='mb-2'>
                        <label htmlFor='id'>ID:</label>
                        <input type='text' required name='id' className='form-control' placeholder='Enter ID' 
                        value={id} onChange={e => setId(e.target.value)}
                        // onChange={e => console.log('id=',e.target.value)}
                        onMouseDown={() => setValidation(true)}
                        />
                        {id.length===0 && validation && <span className="errorMsg">Please Enter ID</span>}
                    </div>                   
                    <div className='mb-2'>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' required name='name' className='form-control' placeholder='Enter Name' 
                        value={name} onChange={e => setName(e.target.value)}
                        onMouseDown={() => setValidation(true)}
                        />
                        {name.length===0 && validation && <span className="errorMsg">Please Enter Student name</span>}
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='place'>Place:</label>
                        <input type='text' required name='place' className='form-control' placeholder='Enter Place'
                        value={place} onChange={e => setPlace(e.target.value)}
                        onMouseDown={() => setValidation(true)}
                        />
                        {place.length===0 && validation && <span className="errorMsg">Please Enter Student place</span>}
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='phone'>Phone:</label>
                        <input type='text' required name='phone' className='form-control' placeholder='Enter Phone'
                        value={phone} onChange={e => setPhone(e.target.value)}
                        onMouseDown={() => setValidation(true)}
                        />
                        {phone.length===0 && validation && <span className="errorMsg">Please Enter Student phone number</span>}
                    </div>
                    <button className='btn btn-success'>Update</button>
                    <Link to='/' className='btn btn-primary ms-3'>Back</Link>
                </form>
            </div>
        </div>

    )
}