import React  from 'react';
import {Radio, Row, Col} from 'antd';
import {connect} from "react-redux";
import {codeFormRadioChangeAction} from 'actions/database/codeFormRadioAction'
import {PPM_TRUKING_PACKAGING, PPM_STAR_RISK, PDM_STAR_DEVIATEDOC, PPM_TRUKING_PROGRAM_PROJECTTEAM, PPM_TRUKING_OUTBOUND_REQUI} from "components/database/CodeConst"

class CodeFormInfoRadio extends React.Component{

    componentWillMount(){
        this.props.dispatch(codeFormRadioChangeAction(this.DEFAULT_VAL))
    }

    onChange = e => {
        // console.log('radio checked', e.target.value);
        this.props.dispatch(codeFormRadioChangeAction(e.target.value))
    }

    DEFAULT_VAL = PPM_TRUKING_OUTBOUND_REQUI;

    render = () => {
        return (
            <Row type="flex" justify="start" style={{marginTop: 5, marginBottom: 15}}>
                <Col offset={6}>
                    <Radio.Group onChange={this.onChange} value={this.props.info}>
                        <Radio value={PPM_TRUKING_PACKAGING}>PPM_TRUKING_PACKAGING</Radio>
                        <Radio value={PDM_STAR_DEVIATEDOC}>PDM_STAR_DEVIATEDOC</Radio>
                        <Radio value={PPM_STAR_RISK}>PPM_STAR_RISK</Radio>
                        <Radio value={PPM_TRUKING_PROGRAM_PROJECTTEAM}>PPM_TRUKING_PROGRAM_PROJECTTEAM</Radio>
                        <Radio value={PPM_TRUKING_OUTBOUND_REQUI}>PPM_TRUKING_OUTBOUND_REQUI</Radio>
                    </Radio.Group>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => ({info: state.codeFormChangeInfo && state.codeFormChangeInfo.formInfo ? state.codeFormChangeInfo.formInfo : {}})

export default connect(mapStateToProps)(CodeFormInfoRadio)

