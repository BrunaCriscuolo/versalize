
import { Table as T } from 'antd';

export const Table = ({ columns, data, title, showHeader }) => (
  <T showHeader={showHeader} columns={columns} dataSource={data} title={title} pagination={{ position: ['none', 'bottomRight'] }} />
);
