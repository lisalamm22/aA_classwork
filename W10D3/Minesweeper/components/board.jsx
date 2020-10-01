import React from "react"
import Tile from './tile'

class Board extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
                {this.props.board.grid.map((row, idx) => {
                    return (<div className="row" key={idx}>
                        {row.map((tile,idx2)=>{
                            return (<Tile key={String(idx) + String(idx2)} tile={tile} updateGame={this.props.updateGame} />)
                        })}
                    </div>)
                })}
            </div>
        )
    }
}

export default Board
            