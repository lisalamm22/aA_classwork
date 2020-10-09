import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { getItemsByPokemonId } from '../../reducers/selectors'
import PokemonDetail from './pokemon_detail'

const mapStateToProps = (state,ownProps) => {
    const pokemon = state.entities.pokemon[ownProps.match.params.pokemonId]
    const items = getItemsByPokemonId(state, ownProps.match.params.pokemonId)
    // console.log(ownProps)
    debugger
    return ({
        pokemon: pokemon,
        items: items,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        requestSinglePokemon: (pokemonId) => { 
            return dispatch(requestSinglePokemon(pokemonId))
        }
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonDetail);