export const selectAllPokemon = (state) =>{
    let res = Object.values(state.entities.pokemon)
    return res;
}

export const getItemsByPokemonId = (state, pokemonId) => {
    let res = Object.values(state.entities.items).filter(item =>{
        item.pokemon_id === pokemonId
    })
    return res;
}