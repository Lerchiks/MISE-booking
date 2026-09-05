import style from './Spin.module.css';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

export function SpinLoader() {
  return <Spin indicator={<LoadingOutlined spin />} size="small" />;
}
