import React, { Component } from 'react';

/**
 * 1，创建阶段；
 *      constructor 
 *       
 *       
 * 2，更新阶段；
 * 3，卸载阶段；
 * 
 */

class Main extends Component {
    /**
     * 父组件传入新的 props 时，用来和当前的 state 对比，判断是否需要更新 state。
     * 以前一般使用 componentWillReceiveProps 做这个操作。
     */
    static getDerivedStateFromProps(){
        console.log("static")
        return null;
    }
    constructor(props) {
        super(props);
        this.state = {
            name: "mingyang"
        }
        console.log("1")
        this.setName = this.setName.bind(this);
    }
  
    // componentWillMount() { //新版本中会废除；
    //     console.log("2")
    // }
  
    componentDidMount() {
        console.log("5")
    }
    shouldComponentUpdate() {
        console.log("3")
        return true
    }
    componentWillUnmount() {
        console.log("6")
    }
    componentDidCatch(err,info){
        console.log(err);
        console.log(info)
    }
    setName() {
        this.setState({
            name:"xiaobao"
        })
    }

    render() {
        console.log("4")
        return (
            <div onClick={this.setName}>
                {this.state.name}
            </div>
        );
    }

}

export default Main;