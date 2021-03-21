import react from "react";

class Sign extends react.Component {

    constructor(props) {
        super();

        this.state = {
            data: ''
        }
    }

    //before mounting
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
        console.log('[Sign render]')
        console.log(this.state)


        return <div className={'sign'}>
            {this.state.data.signValue}
        </div>
    }

}


export default Sign