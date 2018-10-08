import React from "react";
import { Link } from "react-router-dom";

const style = {
  width: "1.13rem",
  height: ".4rem",
  background: "rgba(3, 43, 80, .8)",
  borderRadius: ".1rem",
  lineHeight: ".4rem",
  textAlign: "center",
  fontSize: "12px",
  position: "fixed",
  top: ".3rem",
  left: ".3rem",
  zIndex: "1"
};
const a = {
  color: "#ffffff"
};
export default class BackHome extends React.Component {
  render() {
    return (
      <div style={style}>
        <Link to="/home" style={a}> 返回首页 </Link>
      </div>
    );
  }
};

