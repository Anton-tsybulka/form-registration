import axios from 'axios'
import 'antd/dist/antd.css'
import './App.css'

import React, { useState } from 'react'

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

  const [login, setLogin] = useState(''),
        [password, setPassword] = useState(''),
        [firstName, setFirstName] = useState(''),
        [lastName, setLastName] = useState(''),
        [isAdmin, setIsAdmin] = useState(false),
        [instagram, setInstagram] = useState(''),
        [telegram, setTelegram] = useState('')

    const onFinish = ({login, password, firstName, lastName, isAdmin, instagram, telegram}) => {
      axios.post('https://typ-back.herokuapp.com/api/users/register', {
        login,
        password,
        firstName,
        lastName,
        isAdmin,
        instagram,
        telegram,
       "moduleId": 1
    }).then(({data}) => localStorage.setItem('token', data.token))
    }
 

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
        <Input value={login} onChange={(e) => setLogin(e.target.value)} />
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
        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
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
        <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
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
        <Input value={lastName} onChange={(e) => setLastName(e.target.value)} />
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
        <Input value={instagram} onChange={(e) => setInstagram(e.target.value)} />
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
        <Input value={telegram} onChange={(e) => setTelegram(e.target.value)} />
      </Form.Item>

      <Form.Item label="Are you admin?" name="isAdmin" valuePropName="checked">
          <Switch /* value={isAdmin} onClick={(e) => setIsAdmin(e.target.value)} */ />
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