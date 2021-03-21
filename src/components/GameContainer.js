import react from "react";
import GameHeadBoard from "./GameHeadBoard";
import ShowDice from "./ShowDice";
import Sign from "./Sign";
import Button from "./Button";


class GameContainer extends react.Component {

    constructor(props) {
        super();

        this.state = {
            currentScore: 0,
            currentDice: 0,
            currentSecondDice: 0,
            currentPlayer: 'player 1',
            gamePoints: 1,
            checkScore: 0,

            players: [
                {
                    name: "player 1",
                    totalScore: 0,

                },
                {
                    name: "player 2",
                    totalScore: 0,

                }
            ],
            playersStart: [
                {
                    name: "player 1",
                    totalScore: 0,

                },
                {
                    name: "player 2",
                    totalScore: 0,

                }
            ]
        }
    }

    gamePoints = (e) => {
        if (e.target.value > 1 && e.target.value < 100)
            this.setState({
                gamePoints: e.target.value
            })

        return true
    }

    rollDice = () => {

        let num = Math.floor(Math.random() * 6) + 1
        let secondNum = Math.floor(Math.random() * 6) + 1

        // console.log(num)

        this.setState({
            currentDice: num,
            currentSecondDice: secondNum,
            currentScore: this.state.currentScore + num + secondNum,
        })
        return true
    }

    bank = () => {

        if (this.state.currentScore === 0) {
            return
        }

        let currentPlayers = []
        let nextPlayer
        let checkScore

        this.state.players.forEach((player) => {
            if (player.name === this.state.currentPlayer) {
                let temp = {}
                temp.name = this.state.currentPlayer
                temp.totalScore = player.totalScore + this.state.currentScore
                checkScore = temp.totalScore //
                currentPlayers.push(temp)
            } else {
                nextPlayer = player.name
                let temp = {}
                temp.name = player.name
                temp.totalScore = player.totalScore
                currentPlayers.push(temp)
            }
        })


        this.setState({

            currentPlayer: nextPlayer,
            currentScore: 0,
            currentDice: 0,
            currentSecondDice: 0,
            players: currentPlayers,
            checkScore: checkScore
        })


        return true
    }

    changeTurn = () => {

        if (this.state.currentScore === 0) {
            return
        }
        let nextPlayer

        this.state.players.forEach((player) => {
            if (player.name === this.state.currentPlayer) {
            } else {
                nextPlayer = player.name

            }
        })

        this.setState({

            currentPlayer: nextPlayer,
            currentScore: 0,
            currentDice: 0,
            currentSecondDice: 0,
        })

        return true
    }

    reStart = () => {

        this.setState({

            currentPlayer: this.state.players[0].name,
            currentScore: 0,
            currentDice: 0,
            currentSecondDice: 0,
            players: this.state.playersStart,
            gamePoints: 1,
            checkScore: 0,
        })

        return true
    }


    render() {
        console.log('[Game render]')
        console.log(this.state)

        let a = <></>
        if (this.state.currentDice === this.state.currentSecondDice && this.state.currentDice !== 0) {

            a = <div className={'changeTurn'}>
                your dice are equal!
                change turn
            </div>
            {
                setTimeout(this.changeTurn, 1000)
            }
        }

        if (this.state.checkScore >= this.state.gamePoints) {

            a = <div className={'changeTurn'}>
                GameOver! {this.state.currentPlayer}, you lost!
            </div>
            {
                setTimeout(this.reStart, 3000)
            }
        }

        return <>
            {/*<Button btnValue={'btn try'} btnFunction={this.btnFunctionTry} ></Button>*/}
            {/*<Sign signValue={'sign try'}/>*/}
            <div className={'playersboard'}>
                <GameHeadBoard playerName={this.state.players[0].name} totalScore={this.state.players[0].totalScore}/>

                <input type={'number'} min={"1"} max={"100"} value={this.state.gamePoints}
                       onChange={this.gamePoints}></input>

                <GameHeadBoard playerName={this.state.players[1].name} totalScore={this.state.players[1].totalScore}/>
            </div>
            <div className={'current'}>
                <GameHeadBoard playerName={this.state.currentPlayer} totalScore={this.state.currentScore}/>
            </div>
            <div className={'dice'}>
                <ShowDice currentDice={this.state.currentDice}/>

                {a}

                <Button btnValue={'Roll Dice'} btnFunction={this.rollDice}></Button>
                <Button btnValue={'Restart'} btnFunction={this.reStart}></Button>
                <Button btnValue={'Bank'} btnFunction={this.bank}></Button>
                <ShowDice currentDice={this.state.currentSecondDice}/>
            </div>

        </>
    }

}


export default GameContainer