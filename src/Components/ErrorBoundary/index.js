import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         // 错误状态
        hasError: false,
      };
    }
    getDerivedStateFromError(error) {
      // 更新 state 使下一次渲染能够显示降级后的 UI
      return { hasError: true };
    }
    
    render() {
      if (this.state.hasError) {
        // 你可以自定义降级后的 UI 并渲染
        return <h1>出现错误啦，请解决</h1>;
      }
      return this.props.children;
    }
  }
  
  export default ErrorBoundary;
  