import { Space, Spin } from "antd";

const LoadingSpinner = () => {
  return (
    <Space direction="vertical" className="loading-spinner">
      <Space> <Spin tip="Loading..." /> </Space>
    </Space>
  );
};

export default LoadingSpinner;
