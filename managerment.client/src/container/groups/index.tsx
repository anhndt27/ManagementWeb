import BaseLayout from "../../components/BaseLayout"
import CommonTable from "../../components/table";
import useGroup from "./hooks/useGroup";
import { getListGroup } from "./services/groupService"

const Groups = () => {
    const {
        column, 
        actions,
    } = useGroup();


    return (
      <BaseLayout>
        <CommonTable
          columns={column}
          serviceFunction={getListGroup}
          actions={actions}
        />
      </BaseLayout>
    );
}

export default Groups;