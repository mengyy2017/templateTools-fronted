import React  from 'react';
import {Radio, Row, Col} from 'antd';
import {connect} from "react-redux";
import {codeFormRadioChangeAction} from 'actions/database/codeFormRadioAction'
import {PDM_STAR_DEVIATE, PDM_STAR_DEVIATEDOC, IAM_STAR_POSITION_BELONG_DEPARTMENT} from "components/database/CodeTemplateInfo"

class CodeFormInfoRadio extends React.Component{

    componentWillMount(){
        this.props.dispatch(codeFormRadioChangeAction(this.DEFAULT_VAL))
    }

    onChange = e => {
        // console.log('radio checked', e.target.value);
        this.props.dispatch(codeFormRadioChangeAction(e.target.value))
    }

    DEFAULT_VAL = IAM_STAR_POSITION_BELONG_DEPARTMENT;

    render = () => {
        return (
            <Row type="flex" justify="start" style={{marginTop: 5, marginBottom: 15}}>
                <Col offset={6}>
                    <Radio.Group onChange={this.onChange} value={this.props.info}>
                        <Radio value={PDM_STAR_DEVIATE}>PDM_STAR_DEVIATE</Radio>
                        <Radio value={PDM_STAR_DEVIATEDOC}>PDM_STAR_DEVIATEDOC</Radio>
                        <Radio value={IAM_STAR_POSITION_BELONG_DEPARTMENT}>IAM_STAR_POSITION_BELONG_DEPARTMENT</Radio>
                    </Radio.Group>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => ({info: state.codeFormChangeInfo && state.codeFormChangeInfo.formInfo ? state.codeFormChangeInfo.formInfo : {}})

export default connect(mapStateToProps)(CodeFormInfoRadio)

