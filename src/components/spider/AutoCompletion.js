import React from "react";
import {AutoComplete, Col} from 'antd';
import {connect} from "react-redux";
import {Row} from "antd";
import {setAutoCompletionSourceAction} from "actions/spider/autoCompletionAction"

function onSelect(value) {
    console.log('onSelect', value);
}

class AutoCompletion extends React.Component {
    // state = {
    //     dataSource: [],
    // };

    handleSearch = phrase => {
        // this.setState({
        //     dataSource: !value ? [] : [value, value + "aaa", value + value + "bbb"],
        // });
        this.props.dispatch(setAutoCompletionSourceAction('indexName=wb&fieldName=school&phrase=' + phrase))
    };

    onChange = () => {
        alert(2)
    }

    render = () => {
        const { AutoCompletionSource } = this.props;
        return (
            <Row>
                <Col span={8} offset={8}>
                    <AutoComplete dataSource={AutoCompletionSource} size="large"
                       style={{ width: 400 }} onSelect={onSelect}
                       onSearch={this.handleSearch} placeholder="input here"/>
                </Col>

            </Row>

        );
    }
}

const mapStateToProps = state => ({AutoCompletionSource: state.autoCompletion ? state.autoCompletion.AutoCompletionSource : []})

export default connect(mapStateToProps)(AutoCompletion)