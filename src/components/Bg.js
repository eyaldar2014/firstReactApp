// child to parent cheat-sheet :
//
// asPropVarToChild:: ' parentCallback = {this.elementCallBack} '
// asMethodInParentClass:: ' elementCallBack =(childData)=>{'function code here'} '
// this.props.parentCallback('data from child'); command to send data to parent
//

import react from "react";
import './style.css'
import Game from "./GameContainer";
import Login from './LoginContainer'

class Bg extends react.Component {

    constructor(props) {
        super();

        this.state = {
            data: ''
        }
    }

    render() {
        console.log('[bg render]')

        return <>
            <Game/>
            <Login/>
        </>
    }

}


export default Bg