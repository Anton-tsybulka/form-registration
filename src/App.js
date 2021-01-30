import axios from 'axios'
import 'antd/dist/antd.css'
import './App.css'

import React from 'react'

import { Form, Input, Button, Switch } from 'antd'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const App = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
    axios.post('https://typ-back.herokuapp.com/api/users/register', {
      "login": values.login,
      "password": values.password,
      "firstName": values.firstName,
      "lastName": values.lastName,
      "isAdmin": values.isAdmin,
      "instagram": values.instagram,
      "telegram": values.telegram,
      "moduleId": 1
    }).then((res) => localStorage.setItem('token', res.data.token))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form className="app"
      {...layout}
      name="basic"
      initialValues={{
        isAdmin: false
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Login"
        name="login"
        rules={[
          {
            required: true,
            message: 'Please input your login!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="First Name"
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please input your first name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your last name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Instagram"
        name="instagram"
        rules={[
          {
            required: true,
            message: 'Please input your instagram!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Telegram"
        name="telegram"
        rules={[
          {
            required: true,
            message: 'Please input your telegram!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Are you admin?" name="isAdmin" valuePropName="checked">
          <Switch />
      </Form.Item>

      <Form.Item {...tailLayout} >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App