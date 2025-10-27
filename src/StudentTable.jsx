import axios from "axios"
import React, { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function StudentTable(){

    const [students, setStudents] = useState([])
    const navigate = useNavigate()
    const DisplayDetails = (id) => {
        //console.log(id)
        navigate("/student/view/" + id)
    }
    const EditDetails = (id) => {
        //console.log(id)
        navigate("/student/edit/" + id)
    }   

    const RemoveDetails = (id) => {
        if(window.confirm("Are you sure you want to delete?")) {

        fetch("http://localhost:3000/students/" + id, {
            method: 'DELETE',
        })
        .then((res) => {
            console.log(res);
            alert("REmoved Student Data successfully");
            window.location.reload();
        })
        .catch((err) => console.log(err.message))

        }
    }   
    useEffect(()=>{
        fetch("http://localhost:3000/students")
        .then((res) => res.json())
        .then((data) => setStudents(data))// 
        // .then((data) => console.log('-----data-----',data))
        .catch(err => console.log(err.message))
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
                            students && students.map((item,index) => (                  
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    {/* <td>{index + 1}</td> */}
                                    <td>{item.name}</td>
                                    <td>{item.place}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <button className="btn btn-sm btn-info me-2"
                                        onClick={() => DisplayDetails(item.id)} >View</button>
                                        <button className="btn btn-sm btn-primary me-2"
                                        onClick={() => EditDetails(item.id)} >Edit</button>
                                        <button className="btn btn-sm btn-danger"
                                        onClick={() => RemoveDetails(item.id)} >Delete</button>
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