import React from "react";
import Header from './Header';
import List from './List';

/**
 * @constructor <OtherCourse/>
 * @description <其他课程>
 */

class OtherCourse extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <List id={this.props.match.params.id}/>
      </React.Fragment>
    );
  }
}

export default OtherCourse;

