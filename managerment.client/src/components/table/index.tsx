import React from 'react';
import { Button, Col, Input, Popconfirm, Row, Space, Table } from 'antd';
import useTable from './hooks/useTable';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';

interface CommonTableProps {
  columns: []; 
  serviceFunction: (params: any) => Promise<any>;
  actions?: {
      onCreate?: () => void;
      onEdit?: (record: any) => void;
      onDelete?: (record: any) => void;
  };
}

const CommonTable : React.FC<CommonTableProps> = ({ columns, serviceFunction, actions }) => {
  const { data, loading, pagination, handleTableChange, handleSearch , handleCreate, handleEdit, handleDelete } = useTable(serviceFunction, actions);

  const onSearch = (e) => {
    handleSearch(e.target.value);
  };

  const actionColumn = {
    title: 'Actions',
    key: 'actions',
    with: 50,
    render: (text, record) => (
      <Space size="middle">
        <Button onClick={() => handleEdit(record.id)}><EditOutlined /></Button>
        <Popconfirm
          title="Are you sure to delete this item?"
          onConfirm={() => handleDelete(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger>
            <DeleteOutlined />
          </Button>
        </Popconfirm>
      </Space>
    ),
  };

  return (
    <Row className='w-full'>
      <Col span={24} style={{ width: '100%', marginBottom: '1rem' }}>
        <Row>
          <Col span={6}>
            <Input
              placeholder="Search by name"
              onChange={onSearch}
              allowClear
            />
          </Col>
          <Col span={6}></Col>
          <Col span={6}></Col>
          <Col span={6} className='text-right'>
            <Button type="primary" onClick={handleCreate}>
              <PlusOutlined /> Create 
            </Button>
          </Col>
        </Row>
      </Col>
      <Row className='w-full'>
        <Col span={24}>
          <Table
            columns={[...columns, actionColumn]}
            rowKey={(record) => record.id}
            dataSource={data}
            pagination={{
              current: pagination.current,
              pageSize: pagination.pageSize,
              total: pagination.total,
            }}
            loading={loading}
            onChange={handleTableChange}
          />
        </Col>
      </Row>
    </Row>
  );
};

export default CommonTable;
