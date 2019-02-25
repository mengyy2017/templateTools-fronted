import {Tabs} from 'antd';
import React from "react";
import connect from "react-redux/es/connect/connect";
import SelectDataTab from "components/SelectDataTab";
const TabPane = Tabs.TabPane;



class ProcessTabs extends React.Component{

    callback = (key) => {
        console.log(key);
    }

    render = () => {

        return (
            <div>
                <Tabs className="tabs-property" defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Tab 1" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        <SelectDataTab/>
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>
        )
    }

}

var mapStateToProps = state => ({ })

export default connect(mapStateToProps)(ProcessTabs)
