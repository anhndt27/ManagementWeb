import PropTypes from "prop-types";
import { Row } from "antd";

function PageLayout({ background, children }) {
  return (
    <Row
      style={{ backgroundColor: { background } }}
      className="overflow-x-hidden h-screen w-screen"
    >
      {children}
    </Row>
  );
}

PageLayout.defaultProps = {
  background: "default",
};

PageLayout.propTypes = {
  background: PropTypes.oneOf(["white", "light", "default"]),
  children: PropTypes.node.isRequired,
};

export default PageLayout;
