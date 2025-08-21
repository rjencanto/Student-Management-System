import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Read() {
    const {name} = useParams();
    const [student, setStudent] = useState([])
    useEffect(()=> {
      axios.get('http://localhost:3001/read/' +name)
        .then(res => {
            console.log(res)
            setStudent(res.data[0]);
        })
        .catch(err => console.log(err))
    }, );
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'> 
            <div className='p-2'>
            <h2> Student Detail</h2>
            <h2>{student.name} </h2>
            <h2>{student.age} </h2>
            <h2>{student.department} </h2>
            <h2>{student.Reg_no} </h2>
            </div>
            <Link to="/" className='btn btn-primary me-2'>Back</Link>
            <Link to={`/edit/${student.name}`} className='btn btn-info'>Edit</Link>
             

        </div>

    </div>
  )
}

export default Read
