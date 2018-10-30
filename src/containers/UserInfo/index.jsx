import React from "react";

/**
 * @constructor <UserInfo/>
 * @description <账户信息>
 */

class UserInfo extends React.Component {

  // static getDerivedStateFromProps() {
  //   console.log("我执行了....");
  //   return null
  // }

  constructor(props) {
    super(props);
    this.state = {
      num: 1
    };
    console.log("我是初始化....");
    this.setNum = this.setNum.bind(this);
    this.doc = this.doc.bind(this);
  }

  componentWillMount() {
    console.log("组件还未渲染....");
  }

  componentDidMount() {
    console.log("组件已经渲染了....");
  }

  shouldComponentUpdate() {
    console.log("我控制了渲染....");
    return true;
  }

  componentWillUnmount() {
    console.log("离开了组件....");
    return true
  }

  setNum() {
    let num = this.state.num;
    num++;
    this.setState({
      num: num
    });
  }

  doc(e){
    console.log(e)
  }
  render() {
    console.log("组件开始渲染了....");
    return (
      <div>
        <p ref={this.doc}>{this.state.num}</p>
        <button onClick={this.setNum}>add</button>
      </div>
    );
  }


}

export default UserInfo;

