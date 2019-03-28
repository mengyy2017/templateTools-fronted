import React from "react";
import connect from "react-redux/es/connect/connect";
import Tables from "components/database/Tables";
import Columns from "components/database/Columns";
import Database from "components/database/Database";

class TabTableColumn extends React.Component{

    render = () => {

        return (
                <Database changeActiveKey={this.props.changeActiveKey}>
                    <Tables/>
                    <Columns/>
                </Database>

        )
    }

}

const mapStateToProps = state => ({ })

export default connect(mapStateToProps)(TabTableColumn)
