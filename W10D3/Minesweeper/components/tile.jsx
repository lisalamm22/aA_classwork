import React from "react"
import * as Minesweeper from "../minesweeper.js"

// props => key = { String(idx) + String(idx2)} tile = { tile } updateGame = { this.props.updateGame }
// this.bombed = false;
// this.explored = false;
// this.flagged = false;


class Tile extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        let flag = false;
        if(e.altKey){
            flag = true
        }
        this.props.updateGame(this.props.tile,flag)
    }

    render(){
        let klass="" // unexplored, safe, bombed, flagged
        let emoji = ""
        if (this.props.tile.explored){
            if (this.props.tile.bombed){
                klass= "bombed"
                emoji = "💣"
            }
            else{
                klass="safe"
                let bombs = this.props.tile.adjacentBombCount()
                emoji = bombs > 0 ? bombs : ""
            }
        }
        else if(this.props.tile.flagged){
                klass="flagged"
                emoji = '🚩'
            }
        else{
                klass="unexplored"

            }
        
        return (
        <div className={[klass, "tile"].join(" ")} onClick={this.handleClick}>{emoji}</div>
        )
    }
}

export default Tile

// bomb emoji = '\u1F4A3' &#128163
// flag emoji = '\u1F6A9'

// 💣
// bomb
// Unicode: U+1F4A3, UTF-8: F0 9F 92 A3