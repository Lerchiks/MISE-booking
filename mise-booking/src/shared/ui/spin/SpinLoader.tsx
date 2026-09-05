'use client';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export function SpinLoader() {
  return <Spin indicator={<LoadingOutlined spin />} size="small" />;
}
