import react from "react";
import Sign from "./Sign";

class GameHeadBoard extends react.Component {

    constructor(props) {
        super();

        this.state = {
            data: ''
        }
    }

    //after mounting
    componentWillMount() {
        console.log('[constructor]')

        //is necessary if there is props
        this.setState({
            data: this.props
        })
    }

    //before render
    async componentDidUpdate(nextProps, nextState, nextContext) {
        //better to make this comparison more efficient - "save" if unnecessary
        if (this.props !== nextProps) {
            await this.setState({
                data: this.props
            })
            console.log('render is done')
            return true
        }
        console.log('render is false')
        return false
    }

    render() {
        console.log('[GameHeadBoard render]')
        console.log(this.state)

        return <div className={"gameHeadBoard"}>

            <Sign signValue={this.state.data.playerName} />

            <div className={'totalScore'}> {this.state.data.totalScore} </div>

        </div>



    }

}


export default GameHeadBoard