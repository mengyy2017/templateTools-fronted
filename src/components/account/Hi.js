import React from "react";
import connect from "react-redux/es/connect/connect";
import {Button, Col, Row,} from 'antd';
import {Redirect} from "react-router";

class Hi extends React.Component{

    hi = (e) => {
        // location.reload(true)
        this.setState({loginUrl: "/login"})
    }

    render = () => {

        if (this.state && this.state.loginUrl)
            return (<Redirect to={this.state.loginUrl} />);

        return (
            <div style={{padding: 24}}>
                <Row>
                    <Col span={23}><h3>hi</h3></Col>
                    <Col span={1}><Button type="default" onClick={this.hi}>go</Button></Col>
                </Row>
            </div>
        )
    }

}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(Hi)
