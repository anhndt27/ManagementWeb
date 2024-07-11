import { useNavigate } from "react-router-dom";
import PAGES from "../../../router/pages";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormValuesCreateUser {
  userName: string, 
  email: string,
  phoneNumber: string,
}

const useUser = () => {
  const navigate = useNavigate();


    const column = [
      {
        title: 'Name',
        dataIndex: 'userName',
        key: 'userName',
        sorter: true,
        filters: [
          { text: 'Admin', value: 'Admin' },
          { text: 'Jude', value: 'Jude' },
        ],
        onFilter: (value, record) => record.name.indexOf(value) === 0,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        sorter: true,
      },
      {
        title: 'Phone Number',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
        sorter: true,
      },
      // {
      //   title: 'Avartar',
      //   dataIndex: 'avatar',
      //   key: 'avatar',
      // },
    ];

    const actions = {
      handleCreate: () => {
        navigate(PAGES.createUser);
      },
      handleEdit: (id : number) => {
        navigate(PAGES.editUser, { state: id }); 
      },
      handleDelete: (id : number) => {
        console.log('delete'), id;
      }
    }

    const handleCreateUser = async (user: FormValuesCreateUser) => {
      console.log(user);
    }

    const handleUpdateUser = async (user: FormValuesCreateUser, id: number) => {
      console.log(111, id, user);
    }

    return {
      column,
      actions,
      func: {
        handleCreateUser,
      }
    };
}

export default useUser;