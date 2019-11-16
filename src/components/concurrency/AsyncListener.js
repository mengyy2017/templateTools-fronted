import React from "react";
import connect from "react-redux/es/connect/connect";
import {w3cwebsocket as WebSocket} from "websocket";
import Stomp from "stompjs";
import {concurrencyTestAction} from "actions/concurrency/asyncListenerAction";

class AsyncListener extends React.Component {

    componentWillMount = () => {

        let locationState = this.props.history.location.state

        if(locationState && locationState.exchangeName){
            let that = this
            let ws = new WebSocket('ws://localhost:15674/ws')

            let client = Stomp.over(ws)
            client.heartbeat.outgoing = 0
            client.heartbeat.incoming = 0

            let onConnect = info => {
                client.subscribe("/topic/" + locationState.exchangeName, msg => {
                    if(msg.body)
                        alert("收到asyncExchange消息 =====》" + msg.body)
                    msg.ack()
                }, {ack: "client"})
            }

            let on_error =  () => console.log('error')

            client.connect('root', '1', onConnect, on_error, '/')
            console.log(">>>连接上http://localhost:15674")

            this.props.dispatch(concurrencyTestAction({"exchangeName": locationState.exchangeName}))

        }

    }



    render = () => {

        return <div>hello</div>

    }

}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(AsyncListener)
















