import React from 'react';
import { setTitle } from "../../utils/utils";
import Top from "./Top"
import List from './List';

class My extends React.Component {
    componentDidMount() {
        setTitle("我的");
    }
    render() {
        return (
            <div>
                <Top />
                <List />
            </div>
        );
    }
}

export default My;
