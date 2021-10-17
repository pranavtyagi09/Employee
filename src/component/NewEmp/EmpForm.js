import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import axios from 'axios';
import Address from "./Address";

const EmpForm = ({ selectedEmp }) => {

    const [data, setData] = useState();

    useEffect(()=>{
        console.log('selected',selectedEmp);
    },[])

    useEffect(()=>{
        if (selectedEmp && selectedEmp.id){
            
            axios.put(`https://procom-interview-employee-test.azurewebsites.net/Employee/${selectedEmp.id}`, data)
             .then(response => console.log('res',response))
             .then(()=>{window.alert("Employee update successful");})
             .then(()=>{window.location.href = '/list'})
        }
        
        else if (data){
         axios.post('https://procom-interview-employee-test.azurewebsites.net/Employee', data)
             .then(response => console.log('res',response))
             .then(()=>{window.alert("Employee added successful");})
             .then(()=>{window.location.href = `${window.location.href}list`;})}
    },[data])


    const onFinish = (values) => {
        console.log('Success:', values);
        if (selectedEmp){
          setData({id:selectedEmp.id, ...values});
        }
        else{
          setData(values);
        }
      };

    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };


  return (
    <Form
      name="basic"
      initialValues={{...selectedEmp}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
        <Form.Item
          label="FirstName"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your firstname!",
            },
          ]}
        >
          <Input value={data && data.firstName} />
        </Form.Item>

        <Form.Item
          label="LastName"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your lastname!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={["email"]}
          label="Email"
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
          />
        </Form.Item>

      <Address />

      <Form.Item
      >
        <Button type="primary" htmlType="submit" style={{width: '100%',}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EmpForm;
