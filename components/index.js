import React from "react";
import ReactDOM from "react-dom";
class Test extends React.Component{
  render(){
    return (
      <div>我们是飘散在风中的暗红色树叶</div>
    )
  }
}
ReactDOM.render(<Test/>, document.getElementById("test"));
