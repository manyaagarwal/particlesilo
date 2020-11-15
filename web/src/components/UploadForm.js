import React, { useState } from "react";
import {
  Form,
  Input,
  Tooltip,
  Select,
  Row,
  Col,
  Button,
  Typography,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { FirebaseDB } from "../utils/firebase";

const { Dragger } = Upload;
const { Option } = Select;
const { Title } = Typography;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export const UploadForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const ref = FirebaseDB.collection(values.type);
    if (values.type === "images") {
      const res = await ref.doc().set({
        audience: values.audience ?? [],
        fileType: values.fileType ?? "jpg",
        imageUrl: values.url ?? "",
        name: values.name ?? "",
        topic: values.topic ?? [],
        uploadedBy: "DemoUser",
      });
      message.success(`Resource added successfully.`);
      form.resetFields();
    } else if (values.type === "videos") {
      const res = await ref.doc().set({
        audience: values.audience ?? [],
        fileType: values.fileType ?? "mp4",
        name: values.name ?? "",
        topic: values.topic ?? [],
        uploadedBy: "DemoUser",
        videoUrl: values.url ?? "",
      });
      message.success(`Resource added successfully.`);
      form.resetFields();
    } else if (values.type === "presentations") {
      const res = await ref.doc().set({
        audience: values.audience ?? [],
        author: values.author ?? "",
        fileType: values.fileType ?? "pdf",
        name: values.name ?? "",
        topic: values.topic ?? [],
        uploadedBy: "DemoUser",
        presentationUrl: values.url ?? "",
      });
      message.success(`Resource added successfully.`);
      form.resetFields();
    } else {
      const res = await ref.doc().set({
        audience: values.audience ?? [],
        fileType: values.fileType ?? "mp4",
        name: values.name ?? "",
        topic: values.topic ?? [],
        uploadedBy: "DemoUser",
        url: values.url ?? "",
      });
      message.success(`Resource added successfully.`);
      form.resetFields();
    }
  };

  const children = [
    "LHC",
    "CERN",
    "particles",
    "supersymmetry",
    "rutherford",
    "nuclear",
    "scattering",
    "detector",
    "neutrino",
  ];

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }
  return (
    <div style={{display:"flex", justifyContent:"flex-start", flexDirection:"column"}}>
      <Title style={{textAlign:"left"}}> Upload Resources </Title>
      <div
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >
          <Row>
            <Col span={12}>
              {/* <Form.Item name="resource"> */}
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Strictly prohibit from uploading company data or other band
                  files
                </p>
              </Dragger>
              {/* </Form.Item> */}
            </Col>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Title"
                rules={[
                  {
                    required: true,
                    message: "Please input a title for the Resource",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name="url" label="Link">
                <Input />
              </Form.Item>
              <Form.Item name="fileType" label="File Type">
                <Input />
              </Form.Item>
              <Form.Item
                name="author"
                label={
                  <span>
                    Author/Creator&nbsp;
                    <Tooltip title="Who created this resource?">
                      <QuestionCircleOutlined />
                    </Tooltip>
                  </span>
                }
              >
                <Input />
              </Form.Item>
              <Form.Item name="topic" label="Topics">
                <Select
                  mode="tags"
                  style={{ width: "100%" }}
                  placeholder="Tags Mode"
                  onChange={handleChange}
                >
                  {children.map((child) => (
                    <Option key={child}>{child}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name="audience" label="Audience">
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  onChange={handleChange}
                >
                  <Option value="children">Children</Option>
                  <Option value="high school">High School Students</Option>
                  <Option value="undergraduate">Undergraduates</Option>
                  <Option value="graduate">Graduates</Option>
                  <Option value="general public">Anyone</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="type"
                label="Resource Type"
                rules={[
                  {
                    required: true,
                    message: "Please input a type for the Resource",
                  },
                ]}
              >
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Select a type"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="images">Royalty Free Images</Option>
                  <Option value="videos">Videos and Animations</Option>
                  <Option value="visualisations">
                    Data Visualisations, Charts, Plots
                  </Option>
                  <Option value="activities">
                    Interactive Activities and Workshops
                  </Option>
                  <Option value="papers">Paper Digest</Option>
                  <Option value="presentations">Talks and Presentations</Option>
                </Select>
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Upload
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
