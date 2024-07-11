import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DashboardLayout from "../../layouts/LayoutContainers/DashboardLayout";
import { Row } from "antd";

function BaseLayout({ stickyNavbar, children }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");

  useEffect(() => {
    function handleTabsOrientation() {
      return setTabsOrientation("horizontal");
    }
    window.addEventListener("resize", handleTabsOrientation);
    handleTabsOrientation();
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  return (
    <DashboardLayout>
      <Row>{children}</Row>
    </DashboardLayout>
  );
}

BaseLayout.defaultProps = {
  stickyNavbar: false,
};

BaseLayout.propTypes = {
  stickyNavbar: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
