import React from "react";
import { connect } from "react-redux";
import styles from "./style.scss";
import { getIsLikeData, getRemoveLikeData, getAddLikeData, actions } from "../../../store/workDetail";

/**
 * @constructor <FooterBtn />
 * @description 详情页底部是点赞
 */

const mapState = (state) => ({
  isLike: state.getIn(["worksDetail", "isLike"])
});
const mapDispatchToProps = (dispatch) => {
  return ({
    toggleInput: () => dispatch(actions.toggleInput()),
    getIsLikeData: (params) => dispatch(getIsLikeData(params)),
    getRemoveLikeData: (params) => dispatch(getRemoveLikeData(params)),
    getAddLikeData: (params) => dispatch(getAddLikeData(params))
  });
};

@connect(
  mapState,
  mapDispatchToProps
)
class FooterBtn extends React.Component {
  params = {
    TargetType: 3,
    TargetId: this.props.id
  };

  constructor(props) {
    super(props);
    this.toggleLike = this.toggleLike.bind(this);
  }

  componentDidMount() {
    this.props.getIsLikeData(this.params);
  };

  toggleLike() {
    let { isLike, getRemoveLikeData, getAddLikeData } = this.props;
    isLike ? getRemoveLikeData(this.params) : getAddLikeData(this.params);
  }

  render() {
   // console.log(this.props.likeNum);
    const { likeNum, isLike } = this.props;
    let url = isLike ? "http://www.hihiworld.com/web/static/img/good.png" : "http://www.hihiworld.com/web/static/img/workgood.png";
    return (
      <div className={styles["add-btn"]}>
        <div className={styles.left} onClick={this.toggleLike}>
          <img src={url} alt=""/>
          <span>&nbsp; {likeNum}</span>
        </div>
        <div className={styles.center}/>
        <div className={styles.right} onClick={() => this.props.toggleInput()}>
          <img src="http://www.hihiworld.com/web/static/img/comment@3x.png" alt=""/>
        </div>
      </div>
    );
  }
}

export default FooterBtn;