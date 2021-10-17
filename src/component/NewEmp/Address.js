import React from 'react';
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


const Address = ({incCounter, decCounter}) => {

    return (
       
      <Form.List name="addresses">
        {(fields, { add, remove }) => (
          <div>
            {fields.map(field => (
              <Space key={field.key}  className="ant-space-vertical" align="baseline">
                <Form.Item label='Address' >
                </Form.Item>
                <Form.Item
                {...field}
                label='Street Name'
                name={[field.name,'streetName']}
                fieldKey={[field.fieldKey, 'streetName']}
                rules={[
                    {
                    required: true,
                    message: `Please input your streetName!`,
                    },
                ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                label='Postal Code'
                name={[field.name, 'postalCode']}
                fieldKey={[field.fieldKey, 'postalCode']}
                rules={[
                    {
                    required: true,
                    message: `Please input your postalCode!`,
                    },
                ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                label='State'
                name={[field.name, 'state']}
                fieldKey={[field.fieldKey, 'state']}
                rules={[
                    {
                    required: true,
                    message: `Please input your state!`,
                    },
                ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                label='Country'
                name={[field.name, 'country']}
                fieldKey={[field.fieldKey, 'country']}
                rules={[
                    {
                    required: true,
                    message: `Please input your country!`,
                    },
                ]}
                >
                    <Input />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}

            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Address
              </Button>
            </Form.Item>
          </div>
        )}
    </Form.List>

    );
}

export default Address;