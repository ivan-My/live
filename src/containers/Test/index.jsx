import React from "react";
import { Toast } from "antd-mobile";
import {
  getQueryList,
  getSumGetChannelCourseGroup,
  getUserInfos
} from "../../api";
import {
  clearState
} from "../../store/clearState";
import axios from "axios";
import {
  getCourseWork
} from "../../api";
import Example from './hooks'

import './style.css'


let index = 1;

class Test extends React.Component {
  state = {
    data: [],
    num:0

  };



  componentWillMount() {
    window.addEventListener("scroll", this.onScroll.bind(this));
    this.setState({
      num:0
    })
  }

  componentDidMount() {

    getCourseWork({
      pageIndex: index,
      pageSize: 10,
      OrderType: 2
    }).then(res => {
      const data = res.Data.Data
      this.setState({
        data
      })
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll.bind(this));
  }
  getData() {
    getCourseWork({
      pageIndex: 1,
      pageSize: 10,
      OrderType: 2
    }).then(res => {
      console.log(res.Data.Data)
    })
  }
  onScroll(e) {
    let clientHeight = document.documentElement.clientHeight; //浏览器高度
    let scrollHeight = document.body.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let proLoadDis = 5;


    if ((scrollTop + clientHeight) >= (scrollHeight - proLoadDis)) {
      console.log("到底了");
      let i = index++
      getCourseWork({
        pageIndex: i,
        pageSize: 10,
        OrderType: 2
      }).then(res => {
        const data = res.Data.Data
        this.setState({
          data: data.concat(this.state.data)
        })
      })
    }
  }
  render() {
  
    // const Ele = function () {
    //   return React.createElement(
    //     "div",
    //     {
    //       "className": "main", "id": "18", "data": '000'
    //     },
    //     React.createElement(
    //       'div',
    //       {"id":"div2"},
    //       React.createElement(
    //         'span',
    //         {"className":"span"},
    //         'wo shi span',
    //       )
    //     )
    //   );
    // }

   
    return (
      <div className="main">
asdf
        {this.state.num}

      </div>
    );
  }
}


 function withHeader(WrappedComponent) {
  return class HOC extends WrappedComponent {
    render() {
      const newProps = {
        test:'hoc'
      }
      // 透传props，并且传递新的newProps
      return <div>
        <WrappedComponent {...this.props} {...newProps}/>
      </div>
    }
  }
}

function Hook(Wrapper) {
  return class Inheritance extends Wrapper {
    render() {
     // console.log(this.state)
      if (this.state.data.length === 0) {
        Toast.loading("Loading...", 0);
      }
      return super.render();
    }
  }

}

export default Test;