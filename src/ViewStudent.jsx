import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function ViewStudent(){
    const {studentId} = useParams()
    console.log("studentId=", studentId)
    const [studentData, setStudentData] = useState({})
    useEffect(() => {
        fetch("http://localhost:3000/students/" + studentId)
        .then((res) => res.json())
        .then((data) => {
            console.log("---data---",data)
            setStudentData(data)
        })
        .catch(err => console.log(err.message))
    },[])

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            {studentData && <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>View Student Details</h1>
                 <div className='mb-2'>
                    <strong>ID: </strong>{studentData.id}
                </div>               
                <div className='mb-2'>
                    <strong>Name: </strong>{studentData.name}
                </div>
                <div className='mb-2'>
                    <strong>Place: </strong>{studentData.place}
                </div>
                <div className='mb-2'>
                    <strong>Phone: </strong>{studentData.phone}
                </div>
                <Link to={`/student/edit/${studentId}`} className='btn btn-success'>Edit</Link>
                <Link to='/' className='btn btn-primary ms-3'>Back</Link>

            </div>}
        </div>
    ) 
}