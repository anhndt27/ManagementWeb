import { TablePagingtion } from "../../../components/table/contain";

export const getListGroup = async (params: TablePagingtion) => {
    console.log(123123, params);
    return {
        items: [
            { id: 1, groupName: "test 1", memberCount: 3 },
            { id: 2, groupName: "test 2", memberCount: 4 },
            { id: 3, groupName: "test 1", memberCount: 3 },
            { id: 4, groupName: "test 2", memberCount: 4 },
            { id: 5, groupName: "test 1", memberCount: 3 },
            { id: 6, groupName: "test 2", memberCount: 4 },
            { id: 7, groupName: "test 1", memberCount: 3 },
            { id: 8, groupName: "test 2", memberCount: 4 },
            { id: 9, groupName: "test 1", memberCount: 3 },
            { id: 10, groupName: "test 2", memberCount: 4 },
            { id: 11, groupName: "test 1", memberCount: 3 },
            { id: 12, groupName: "test 2", memberCount: 4 },
        ]
    };
};
