
import { TablePagingtion } from "../../../components/table/contain";

export const getListUser = async (params: TablePagingtion) => {
    return {
        items: [
            { id: 1, email: "test 1", userName: 3, phoneNumber: "123123123", avartar: "/test/image" },
            { id: 2, email: "test 1", userName: 3, phoneNumber: "123123123", avartar: "/test/image" },
            { id: 3, email: "test 1", userName: 3, phoneNumber: "123123123", avartar: "/test/image" },
            { id: 4, email: "test 1", userName: 3, phoneNumber: "123123123", avartar: "/test/image" },
            { id: 5, email: "test 1", userName: 3, phoneNumber: "123123123", avartar: "/test/image" },
            { id: 6, email: "test 1", userName: 3, phoneNumber: "123123123", avartar: "/test/image" },
            { id: 7, email: "test 1", userName: 3, phoneNumber: "123123123", avartar: "/test/image" },
            { id: 8, email: "test 1", userName: 3, phoneNumber: "123123123", avartar: "/test/image" },
            { id: 9, email: "test 1", userName: 3, phoneNumber: "123123123", avartar: "/test/image" },
            { id: 10, email: "test 1", userName: 3, phoneNumber: "123123123", avartar: "/test/image" },
            { id: 11, email: "test 1", userName: 3, phoneNumber: "123123123", avartar: "/test/image" },
            { id: 12, email: "test 1", userName: 3, phoneNumber: "123123123", avartar: "/test/image" },
        ]
    };
}