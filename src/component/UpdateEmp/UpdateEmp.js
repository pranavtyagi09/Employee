import React, { useEffect, useState } from 'react';
import EmpForm from '../NewEmp/EmpForm';
import axios from 'axios';
import '../NewEmp/Input.css'

const UpdateEmp = ({setFormData}) => {

    const[id, setId] = useState(0);
    const[data, setData] = useState('');
    const params = (new URL(document.location)).searchParams.get('id');

    useEffect(()=>{
        setId(params);
    },[params])

    useEffect(()=>{
        if(id){axios.get(`https://procom-interview-employee-test.azurewebsites.net/Employee/${id}`)
        .then(response => setData(response.data));}
    },[id])

    return (
        <div className="container" >
            <h1>Update Employee</h1>
        {data && <EmpForm selectedEmp={{...data}} />}
        {console.log('update data',data)}
        {console.log('update id',id)}
    </div>
    );
} 

export default UpdateEmp;