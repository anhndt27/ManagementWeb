import BaseLayout from "../../components/BaseLayout";
import CommonTable from "../../components/table";
import useUser from "./hooks/useUser";
import { getListUser } from "./services/userService";

const User = () => {
  const {
    column, 
    actions
  } = useUser();

  return (
    <BaseLayout>
      <CommonTable
        columns={column}
        serviceFunction={getListUser}
        actions={actions}
      />
    </BaseLayout>
  );
};

export default User;