import React from "react";
import {AutoComplete, Col} from 'antd';
import {connect} from "react-redux";
import {Row} from "antd";

function onSelect(value) {
    console.log('onSelect', value);
}

class AutoCompletion extends React.Component {
    state = {
        dataSource: [],
    };

    handleSearch = value => {
        this.setState({
            dataSource: !value ? [] : [value, value + "aaa", value + value + "bbb"],
        });
    };

    render = () => {
        const { dataSource } = this.state;
        return (
            <Row>
                <Col span={8} offset={8}>
                    <AutoComplete dataSource={dataSource} size="large"
                       style={{ width: 400 }} onSelect={onSelect}
                       onSearch={this.handleSearch} placeholder="input here"/>
                </Col>

            </Row>

        );
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(AutoCompletion)