import React from "react";
import { connect } from "react-redux";
import styles from "./style.scss";
import { getAddComment } from "../../../api";
import { TextareaItem } from "antd-mobile";
import { actions } from "../../../store/workDetail";

const mapDispatchToProps = (dispatch) => ({
  toggleInput: () => dispatch(actions.toggleInput())
});

@connect(
  null,
  mapDispatchToProps
)
class FooterInput extends React.Component {
  constructor(props) {
    super();
    this.state = {
      msg: ""
    };
    this.sendMsg = this.sendMsg.bind(this);
  }

  onInput(e) {
    //console.log(e);
    this.setState({
      msg: e
    });
  }

  sendMsg() {
    console.log(this.state.msg);
  }

  componentDidMount() {

  };

  render() {
    const { id, toggleInput } = this.props;
    return (
      <div className={styles["input-pop"]}>
        <div className={styles.hei} onClick={() => toggleInput()}/>
        <div className={styles["bottom-input"]}>
          <TextareaItem
            autoFocus={"autofocus"}
            className={styles.input}
            placeholder="想说些什么呢～"
            ref={el => this.autoFocusInst = el}
            autoHeight
            onFocus={(e) => this.onInput(e)}
          />
          <p className={styles.send} onClick={this.sendMsg}>发送</p>
        </div>
      </div>

    );
  }
}

export default FooterInput;