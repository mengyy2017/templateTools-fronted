import React from "react";
import connect from "react-redux/es/connect/connect";
import Tables from "components/Tables";
import Columns from "components/Columns";
import Database from "components/Database";

class SelectDataTab extends React.Component{

    render = () => {

        return (
            <Database>
                <Tables/>
                <Columns/>
            </Database>
        )
    }

}

var mapStateToProps = state => ({ })

export default connect(mapStateToProps)(SelectDataTab)
