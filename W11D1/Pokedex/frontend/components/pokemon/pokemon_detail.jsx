import React from 'react'

class PokemonDetail extends React.Component{
    constructor(props){
        super(props)
        debugger
    }

    componentDidMount(){
        this.props.requestSinglePokemon(this.props.match.params.pokemonId)
    }

    componentDidUpdate(prevProps){
        debugger
        if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId){
            this.props.requestSinglePokemon(this.props.match.params.pokemonId)
        }
    }

    render(){
        return (<div>
            <h1>pokemon details</h1>
            </div>)
    }
}

export default PokemonDetail