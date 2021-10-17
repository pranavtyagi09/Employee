import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import {
    Form,
    InputNumber
  } from 'antd';

const Employee = ({empSelect}) => {



    return (
        <div>
            <Form.Item label="InputNumber">
                <InputNumber onChange={empSelect} />
            </Form.Item>
        </div>
    );
}
export default Employee;