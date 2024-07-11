import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setData,
  setLoading,
  setPagination,
  setFilters,
  setSort,
  setSearchText,
} from '../../../stores/reducers/table.reducer';

const useTable = (serviceFunction, actions) => {
  const dispatch = useDispatch();
  const { data, loading, pagination, filters, sort } = useSelector((state) => state.table);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const result = await serviceFunction({
          page: pagination.current,
          pageSize: pagination.pageSize,
          filters,
          sort,
        });
        dispatch(setData(result.items));
        dispatch(
          setPagination({
            current: pagination.current,
            pageSize: pagination.pageSize,
            total: result.total,
          })
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch, pagination.current, pagination.pageSize, serviceFunction, filters, sort]);

  const handleTableChange = (pagination, filters, sorter) => {
    dispatch(setPagination({ current: pagination.current, pageSize: pagination.pageSize }));
    dispatch(setFilters(filters));
    if (sorter.field) {
      dispatch(setSort({ field: sorter.field, order: sorter.order }));
    }
  };

  const handleSearch = (value: string) => {
    dispatch(setSearchText(value));
    dispatch(setPagination({ current: 1 }));
  };

  const handleCreate = actions?.handleCreate;
  const handleEdit = actions?.handleEdit;
  const handleDelete = actions?.handleDelete;

  return {
    data,
    loading,
    pagination,
    handleTableChange,
    handleSearch,
    handleCreate,
    handleEdit,
    handleDelete,
  };
};

export default useTable;
