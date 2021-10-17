import React, { useEffect, useState } from 'react';
import { Form, Input, Button  } from 'antd';
import './Input.css';
import Employee from './Employee'
import EmpForm from './EmpForm';

const NewEmpForm = () => {


    return (

        <div className="container" >
            <h1>Add a new Employee</h1>
            <EmpForm />
        </div>

    );
}

export default NewEmpForm;