import axios from "axios"
import React, { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function StudentTable(){

    const [students, setStudents] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/students")
        .then((res) => res.json())
        .then((data) => setStudents(data))// 
        // .then((data) => console.log('-----data-----',data))
        .catch(err => console.log(err));
    },[])



    return(
        <div className="d-flex flex-column align-items-center bg-light vh-100">
            <h1>Student Records</h1>
            <div className="w-75 rounded bg-white border shadow p-4">
                <div className="d-flex justify-content-end">
                    
                    <Link to="/student/create" className="btn btn-success">Add new +</Link>
                        
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Place</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students && students.map((d,i) => (                  
                                <tr key={i}>
                                    <td>{d.id}</td>
                                    <td>{d.name}</td>
                                    <td>{d.place}</td>
                                    <td>{d.phone}</td>
                                    <td>
                                        <a className="btn btn-sm btn-primary me-2">Edit</a>
                                        <a className="btn btn-sm btn-danger">Delete</a>
                                    </td> 
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}