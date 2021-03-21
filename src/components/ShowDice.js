import react from "react";

class ShowDice extends react.Component {

    constructor(props) {
        super();

        this.state = {}
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
        console.log('[ShowDice render]')
        console.log(this.state)

        let diceClass = 'dice' + this.state.data.currentDice.toString()
        return <>
            <div className={diceClass}></div>
        </>
    }

}


export default ShowDice