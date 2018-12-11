import React from "react"
import {Row} from "antd"
import Database from 'components/Database'
import Tables from 'components/Tables'
import Columns from 'components/Columns'
import 'styles/index.css'

class Container extends React.Component {
    
    render = () => {
        return (
            <div>
                <Row gutter={32}>
                    <Database>
                        <Tables/>
                        <Columns/>
                    </Database>
                </Row>
            </div>
        )
    }

}

export default Container