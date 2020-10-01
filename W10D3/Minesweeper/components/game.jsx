import * as Minesweeper from "../minesweeper.js"
import React from "react"
import Board from "./board"

class Game extends React.Component{
    constructor(props){
        super(props)
        this.state = { board: new Minesweeper.Board(9,8) }
        this.updateGame = this.updateGame.bind(this)
        this.restartGame = this.restartGame.bind(this)
    }

    updateGame(tile,flag){
        if (flag){
            tile.toggleFlag() 
        } else{
            tile.explore()
        }

        this.setState({ board: this.state.board })
    }

    restartGame(){
        let board= new Minesweeper.Board(9,8)
        this.setState({board: board})
    }

    render() {
        let message = "";
        let gameOver = false;
        if (this.state.board.lost()){
            message = "You lost!"
            gameOver = true;
        } else if (this.state.board.won()){
            message = "You won!"
            gameOver = true;
        }
        let el;
        if (gameOver){
            el = 
            <div>
                <div className="modal-screen"> </div>
                <div className = "modal">
                    <div>{message}</div> 
                    <button onClick={this.restartGame}>Play Again</button>
                </div>
            </div>
        }
        return(
            <div>
                <Board board={this.state.board} updateGame={this.updateGame}/>
                {el}
            </div>
        )
    }
}

export default Game