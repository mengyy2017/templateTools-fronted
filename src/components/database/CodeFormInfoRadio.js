import React  from 'react';
import {Radio, Row, Col} from 'antd';
import {connect} from "react-redux";
import {codeFormRadioChangeAction} from 'actions/database/codeFormRadioAction'
import {PPM_TRUKING_USER, PPM_XINGBANG_NONE, PPM_XINGBANG_PROJECT, PPM_XINGBANG_PPMECR, PPM_XINGBANG_USREDEPARTMENT, PPM_XINGBANG_USRE_TENANT, PPM_STAR_RISK, PPM_TRUKING_PROGRAM_PROJECTTEAM} from "components/database/CodeConst"

class CodeFormInfoRadio extends React.Component{

    componentWillMount(){
        this.props.dispatch(codeFormRadioChangeAction(this.DEFAULT_VAL))
    }

    onChange = e => {
        // console.log('radio checked', e.target.value);
        this.props.dispatch(codeFormRadioChangeAction(e.target.value))
    }

    DEFAULT_VAL = PPM_TRUKING_PROGRAM_PROJECTTEAM;

    render = () => {
        return (
            <Row type="flex" justify="start" style={{marginTop: 5, marginBottom: 15}}>
                <Col offset={6}>
                    <Radio.Group onChange={this.onChange} value={this.props.info}>
                        <Radio value={PPM_TRUKING_USER}>PPM_TRUKING_USER</Radio>
                        <Radio value={PPM_XINGBANG_NONE}>PPM_XINGBANG_NONE</Radio>
                        <Radio value={PPM_XINGBANG_PROJECT}>PPM_XINGBANG_PROJECT</Radio>
                        <Radio value={PPM_XINGBANG_PPMECR}>PPM_XINGBANG_PPMECR</Radio>
                        <Radio value={PPM_XINGBANG_USREDEPARTMENT}>PPM_XINGBANG_USREDEPARTMENT</Radio>
                        <Radio value={PPM_XINGBANG_USRE_TENANT}>PPM_XINGBANG_USRE_TENANT</Radio>
                        <Radio value={PPM_STAR_RISK}>PPM_STAR_RISK</Radio>
                        <Radio value={PPM_TRUKING_PROGRAM_PROJECTTEAM}>PPM_TRUKING_PROGRAM_PROJECTTEAM</Radio>
                    </Radio.Group>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => ({info: state.codeFormChangeInfo && state.codeFormChangeInfo.formInfo ? state.codeFormChangeInfo.formInfo : {}})

export default connect(mapStateToProps)(CodeFormInfoRadio)

