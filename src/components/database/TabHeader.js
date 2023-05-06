import {Tabs} from 'antd';
import React from "react";
import connect from "react-redux/es/connect/connect";
import CodeFormInfo from "components/database/CodeFormInfo";
import CodeFormInfoRadio from "components/database/CodeFormInfoRadio";
import {setActiveKeyAction} from "actions/database/tabHeaderAction";
import TabTableColumn from "components/database/TabTableColumn";
const TabPane = Tabs.TabPane;

class TabHeader extends React.Component{

    changeActiveKey = (key) => {
        this.props.dispatch(setActiveKeyAction(key))
    }

    render = () => {

        const {activeKey} = this.props

        return (
            <div>
                <Tabs defaultActiveKey="1" activeKey={activeKey} onChange={this.changeActiveKey}>
                    <TabPane disabled tab="Tab 0" key="0">
                        <CodeFormInfoRadio></CodeFormInfoRadio>
                        <CodeFormInfo changeActiveKey={this.changeActiveKey}/>
                    </TabPane>
                    <TabPane disabled tab="Tab 1" key="1">
                        <TabTableColumn changeActiveKey={this.changeActiveKey}/>
                    </TabPane>
                    <TabPane disabled tab="Tab 2" key="2">Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>
        )
    }

}

const mapStateToProps = state => state.activeKey


export default connect(mapStateToProps)(TabHeader)
