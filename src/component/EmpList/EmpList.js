import React ,{useEffect, useState} from 'react';
import { Table, Space, Button } from 'antd';

import axios from 'axios';


const EmpList = () => {

    const [data, setData] = useState();

    useEffect(()=>{
          axios.get('https://procom-interview-employee-test.azurewebsites.net/Employee')
          .then(response => setData(response.data));
    },[])

    const deleteEmp = (id) => {
      if(id){
      axios.delete(`https://procom-interview-employee-test.azurewebsites.net/Employee/${id}`)
        .then(() => window.alert('Delete successful'))
        .then(()=>{
          axios.get('https://procom-interview-employee-test.azurewebsites.net/Employee')
        .then(response => setData(response.data));
        })}
        
    }

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'First Name',
          dataIndex: 'firstName',
          key: 'firstName',
        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          key: 'lastName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          },
          {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
          },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
                <a href={`/update?id=${record.id}`} >Update</a>
                <Button type="link" onClick={()=>{deleteEmp(record.id)}} >Delete</Button>
            </Space>
          ),
        },
      ];

    return (
        <div className="container">
            <h1>Employee List</h1>
            <Table columns={columns} dataSource={data} />
        </div>
    );
}
export default EmpList;