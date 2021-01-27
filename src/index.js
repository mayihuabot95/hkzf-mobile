import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';

// 导入 antd-moblie 的样式
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
