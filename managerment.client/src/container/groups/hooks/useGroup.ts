import { useNavigate } from "react-router-dom";
import PAGES from "../../../router/pages";
import * as Yup from "yup";

const useGroup = () => {
    const navigate = useNavigate();

    const column = [
        {
          title: 'Group Name',
          dataIndex: 'groupName',
          key: 'groupName',
          fixed: 'left',
          sorter: true,
        },
        {
          title: 'Member Count',
          dataIndex: 'memberCount',
          key: 'memberCount',
          sorter: true,
        },
    ];

    const actions = {
        handleCreate: () => {
            navigate(PAGES.createGroup);
        },
        handleEdit: (id : number) => {
            navigate(PAGES.editGroup, { state: id }); 
        },
        handleDelete: (id : number) => {
            console.log('delete'), id;
        }
    }

    return {
        column,
        actions,
    };
}

export default useGroup;