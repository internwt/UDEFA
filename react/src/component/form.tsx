import React from "react";
import { Form, Input, DatePicker, Button, Row, Col, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

// import 'antd/dist/antd.css';

const MyForm = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <Row justify="center" style={{ marginTop: "20px" }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={8}>
        <Form
          onFinish={onFinish}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            label="NAME"
            name="name"
            rules={[{ required: true, message: "Please enter NAME!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="FATHERS NAME"
            name="father_name"
            rules={[{ required: true, message: "Please enter FATHERES NAME!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="QUALIFICATION"
            name="qualification"
            rules={[{ required: true, message: "Please enter QUALIFICATION!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[
              {
                required: true,
                message: "Please select a date of birth",
              },
            ]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="ADDRESS"
            name="address"
            rules={[{ required: true, message: "Please enter ADDRESS" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Upload File"
            name="file_image"
            wrapperCol={{ span: 16, offset: 8 }}
            rules={[{ required: true, message: "Please Upload file" }]}
          >
            <Upload>
              <Button icon={<UploadOutlined />}>Upload File</Button>
            </Upload>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default MyForm;
