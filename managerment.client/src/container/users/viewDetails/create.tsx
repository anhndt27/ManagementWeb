import { AutoComplete, Button, Cascader, Col, Form, Input, InputNumber, Row, Select, SelectProps, Typography } from "antd";
import BaseLayout from "../../../components/BaseLayout";
import useUser from "../hooks/useUser";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
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


const CreateUser = () => {
  const [form] = Form.useForm();
  const {
    func: {
      handleCreateUser
    }
  } = useUser();
  const options: SelectProps['options'] = [];

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Select.Option value="86">+86</Select.Option>
        <Select.Option value="87">+87</Select.Option>
      </Select>
    </Form.Item>
  );

  return (
    <BaseLayout>
      <Row className="w-full">
        <Col span={24}>
          <Typography.Title level={3}>Create User</Typography.Title>
        </Col>
      </Row>
      <Row className="w-full">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={handleCreateUser}
          initialValues={{
            prefix: "+63",
          }}
          style={{ maxWidth: 600 }}
          scrollToFirstError
        >
          <Col span={12}>
            <Form.Item
              name="userName"
              label="User Name"
              rules={[
                {
                  required: true,
                  message: "Please input your user name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="additionalEmail"
              label="Additional Email"
              tooltip="Or company email!"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your nickname!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Create
              </Button>
            </Form.Item>
          </Col>
          <Col span={12}>
              <Form.Item 
                name="groups"
                label="Groups"
              >
                <Select options={options}>
                  
                </Select>
              </Form.Item>
          </Col>
        </Form>
      </Row>
    </BaseLayout>
  );
};

export default CreateUser;
