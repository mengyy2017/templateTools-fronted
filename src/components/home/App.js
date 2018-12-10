import React from "react"
import {Route} from 'react-router-dom'
import Container from './Container'

class App extends React.Component{

    render = () => {
        return (
            <div className="wrapper">
                <Container/>
            </div>
        )
    }

}

export default App

