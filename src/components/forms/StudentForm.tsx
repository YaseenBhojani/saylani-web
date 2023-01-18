import useDate from "../../hooks/useDate";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { StudentDetailsType, StudentFormType } from "../../utils/types";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useRef } from "react";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const StudentForm = ({ databaseRef, func }: StudentFormType) => {
  const date = useDate();
  const formRef = useRef<any>();

  const sendDetailsHandler = async (details: StudentDetailsType) => {
    try {
      await addDoc(collection(db, `registrations: ${databaseRef}`), {
        ...details,
        date,
      });
      func(true);
      setTimeout(() => {
        func(null);
        formRef.current.resetFields();
      }, 2000);
    } catch (e) {
      console.log(e);
      func(false);
      setTimeout(() => func(null), 2000);
    }
  };

  const onFinish = (values: StudentDetailsType) => {
    sendDetailsHandler(values);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      className="student-form"
      validateMessages={validateMessages}
      ref={formRef}
    >
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ type: "email", required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="age"
        label="Age"
        rules={[{ type: "number", min: 0, max: 99, required: true }]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        label="Phone Number"
        rules={[
          {
            type: "number",
            message: "Please input your phone number!",
            required: true,
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name="education"
        label="Education"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Option value="matriculation">Matriculation</Option>
          <Option value="intermediate">Intermediate</Option>
          <Option value="graduation">Graduation</Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
        <Button type="primary" htmlType="submit" className="stdFormBtn">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StudentForm;
