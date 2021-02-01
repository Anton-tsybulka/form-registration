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
          ({ getFieldValue }) => ({
            validator(rule, value = "") {
              if (!value.match(/^[a-z0-9_\.\@-]{3,20}$/)) {
                return Promise.reject("Only letters, numbers and _ - . @");
              } else {
                return Promise.resolve();
              }
            }
          })
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          ({ getFieldValue }) => ({
            validator(rule, value = "") {
              if (!value.match(/^[a-z0-9_-]{6,20}$/)) {
                return Promise.reject("Only letters, numbers and _ -");
              } else {
                return Promise.resolve();
              }
            }
          })
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="First Name"
        name="firstName"
        rules={[
          ({ getFieldValue }) => ({
            validator(rule, value = "") {
              if (!value.match(/^[a-zA-Z]+$/)) {
                return Promise.reject("Letters only");
              } else {
                return Promise.resolve();
              }
            }
          })
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[
          ({ getFieldValue }) => ({
            validator(rule, value = "") {
              if (!value.match(/^[a-zA-Z]+$/)) {
                return Promise.reject("Letters only");
              } else {
                return Promise.resolve();
              }
            }
          })
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Instagram"
        name="instagram"
        rules={[
          ({ getFieldValue }) => ({
            validator(rule, value = "") {
              if (!value.match(/^[a-z0-9_\@-]{3,20}$/)) {
                return Promise.reject("Only letters, numbers and _ - @");
              } else {
                return Promise.resolve();
              }
            }
          })
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Telegram"
        name="telegram"
        rules={[
          ({ getFieldValue }) => ({
            validator(rule, value = "") {
              if (!value.match(/^[a-z0-9_\@-]{3,20}$/)) {
                return Promise.reject("Only letters, numbers and _ - @");
              } else {
                return Promise.resolve();
              }
            }
          })
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Are you admin?" name="isAdmin" >
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