import { Card, Input, Button, Switch, Typography, Row, Col, Flex } from 'antd';
import { Controller } from 'react-hook-form';
import 'tailwindcss/tailwind.css';
import CoverLayout from '../../components/CoverLayout/CoverLayout';
import useLogin from './hooks/useLogin';

function Cover() {
  const {
    formState : { errors},
    func: { 
      control,
      onSubmit
    }} = useLogin();

  return (
    <CoverLayout>
      <Card>
        <Row className="bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-lg mx-2 mt-2 p-3">
          <Col span={24}>
            <Typography.Title level={4} className="text-white mt-1 text-center">
              Sign in
            </Typography.Title>
          </Col>
          <Col span={24}>
            <Typography.Text className="text-white text-center">
              Enter your email and password to Sign In
            </Typography.Text>
          </Col>
        </Row>
        <Row className="pt-4 pb-3 px-3">
          <form onSubmit={onSubmit} className="w-full">
            <Row className="mb-2 w-full">
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    type="email"
                    placeholder="john@example.com"
                  />
                )}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </Row>
            <Row className="mb-2 w-full">
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    placeholder="************"
                    className="w-full"
                  />
                )}
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </Row>
            <Row className="mt-4 mb-1">
              <Button type="primary" htmlType="submit" className="w-full">
                SIGN IN
              </Button>
            </Row>
          </form>
        </Row>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
