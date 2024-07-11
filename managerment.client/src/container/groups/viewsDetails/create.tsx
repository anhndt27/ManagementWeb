import { Row } from "antd";
import BaseLayout from "../../../components/BaseLayout";
import useUser from "../../users/hooks/useUser";

const CreateGroup = () => {
  const {
    state: {
        errors
    },
    func: {
        handleSubmit
    }
  } = useUser();

  return (
    <BaseLayout>
      <Row>
        <h1>Group</h1>
      </Row>
    </BaseLayout>
  );
};

export default CreateGroup;