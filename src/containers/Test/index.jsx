import React from "react";
import { getQueryList, getSumGetChannelCourseGroup, getUserInfos } from "../../api";

class Test extends React.Component {

  state = {
    data: [1, 2, 3, 4, 5]
  };

  componentWillMount() {
    window.addEventListener("scroll", this.onScroll.bind(this));

  }

  componentDidMount() {
    const p = [getQueryList(), getSumGetChannelCourseGroup(), getUserInfos()];
    Promise.all(p).then(res => {
      //  console.log("所有请求已经完成");
      //console.log(res);
    }).catch(err => {
     // console.log(err);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll.bind(this));
  }
  onScroll(e) {
    let clientHeight = document.documentElement.clientHeight; //浏览器高度
    let scrollHeight = document.body.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let proLoadDis = 5;
    console.log(scrollHeight);
    console.log(scrollTop);
    if ((scrollTop + clientHeight) >= (scrollHeight - proLoadDis)) {
      console.log("到底了");
     // console.log(clientHeight);
      
      var data = [];
      for (var i = 0; i < 8; i++) {
        data.push(i)
      }
      this.setState({
        data: data.concat(this.state.data)
      })
    }
  }
  render() {
    const style = {
      "width": "300px",
      "height": "150px",
      "border": "1px solid black",
      'margin': '10px'
    };
    return (
      <div >
        {
          this.state.data.map((item, key) => {
            return <div key={key} style={style}> {item}</div>
          })
        }
      </div>
    );
  }
}

export default Test;
