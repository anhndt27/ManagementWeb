import PropTypes from "prop-types";
import { Col, Flex, Row } from "antd";
import PageLayout from "../../layouts/LayoutContainers/PageLayout"; 

function CoverLayout({ children}) {
  return (
    <PageLayout>
      <Flex justify="center" align="center" className="w-screen">
        <Row>
          <Col>
            {children}
          </Col>
        </Row>
      </Flex>
    </PageLayout>
  );
}

CoverLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CoverLayout;
