import { Col, Row } from "antd";
import PropTypes from "prop-types";

function DashboardLayout({ children }) {
  return (
    <Row>
      <Col span={24} className="h-screen">
        {children}
      </Col>
    </Row>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
