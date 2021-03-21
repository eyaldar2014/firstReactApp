
import react from "react";

class Button extends react.Component {

    constructor(props) {
        super();

        this.state = {
            data: ''
        }
    }

    //after mounting
    componentDidMount() {
        console.log('[constructor]')

        //is necessary if there is props
        this.setState({
            data: this.props
        })
    }


    render() {
        console.log('[Button render]')
        console.log(this.state)


        return <input type={'button'} value={this.state.data.btnValue} className={'btn'} onClick={this.state.data.btnFunction}></input>
    }

}


export default Button