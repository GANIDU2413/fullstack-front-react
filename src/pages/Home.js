import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    const [users,setUser]=useState([]);

    useEffect(()=> {
        loadUsers();  
    },[]);

    const loadUsers=async()=>{
        const result = await axios.get("http://localhost:8080/users");
        setUser(result.data);
    };

    const deleteUser= async (id)=>{
      
    };

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">E-mail</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {
        users.map((user,index)=>(
            <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <button className='btn btn-primary mx-3 btn-sm'>View</button>
                    <Link className='btn btn-outline-primary mx-2 btn-sm' 
                      to={`/edituser/${user.id}`} >Edit</Link>
                    <button className='btn btn-danger mx-2 btn-sm'>Delete</button>


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
