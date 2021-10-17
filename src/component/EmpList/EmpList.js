import React ,{useEffect, useState} from 'react';
import { Table, Tag, Space } from 'antd';

import axios from 'axios';


const EmpList = () => {

    const [data, setData] = useState();

    useEffect(()=>{
            axios.get('https://procom-interview-employee-test.azurewebsites.net/Employee')
            .then(response => setData(response.data));
    },[])

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
              {/* <a>Update {record.firstName}</a> */}
              {/* <a>Delete</a> */}
            </Space>
          ),
        },
      ];

    return (
        <>
            <h1>This is Emp List</h1>
            <Table columns={columns} dataSource={data} />
        </>
    );
}
export default EmpList;