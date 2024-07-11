import { useLocation } from "react-router-dom";
import BaseLayout from "../../../components/BaseLayout";

const EditGroup = () => {
  const location = useLocation();
  const data = location.state;

  console.log(1111, data);
  return (
    <BaseLayout>
      <h1>Test 123</h1>
    </BaseLayout>
  );
};

export default EditGroup;
