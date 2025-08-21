import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import { useLocation } from 'react-router-dom';

function Home(){
    const [students , setStudents] = useState([])
    //const location = useLocation();

   useEffect(()=> {
      fetch("http://localhost:3001/api/students")
        .then(res => res.json())
        .then(data=> setStudents(data))
        .catch(err=> console.log(err));
      } , []);

     

    
  return(
        <div className='d-flex 100vh bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h2 className= "text-center">Student List</h2>
                <div className="d=flex justify-content-end">
                    <Link to="/create" className='btn btn-success' >Create + </Link>
                </div>
                   <table className='table'>
                    <thead>
                         <tr>
                            <th>name</th>
                            <th>age </th>
                            <th>department </th>
                            <th>Reg_no </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                            
                           
                        {
                        students.map((student, index) => {
                            return <tr key={index}> 
                               <td>{student.name} </td>
                               <td>{student.age} </td>
                               <td>{student.department} </td>
                               <td>{student.Reg_no} </td>
                               <td>
                                    <Link to={`/read/${student.name}`} className ='btn btn-sm btn-info'>Read</Link>
                                    <Link to={`/edit/${student.name}`} className ='btn btn-sm btn-primary mx-2'>Edit</Link>
                                    <button onClick= { () => handleDelete(student.name)} className ='btn btn-sm btn-danger'>Delete</button>
                                </td> 
                            </tr>

                         })}
                        

                    </tbody>

                </table>

             </div>
        </div>
    );
}



export default Home
