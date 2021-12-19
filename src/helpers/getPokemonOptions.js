import axios from 'axios'

const getPokemons = () => {

    const pokemonsArr = Array.from(Array(250)) //es una manera de hacerlo
    
    return pokemonsArr.map( ( _ , index) => index + 1 )

}

const getPokemonOptions = async() => {

    const mixedPokemons= getPokemons().sort( ()=>  Math.random() -0.5 )
    

    const pokemonListos = await getPokemonNames( mixedPokemons.splice(0,4))
     // esto es lo ultimo que devuelve
    
    return{
        pokemonListos
    }
}

const getPokemonNames = async([a,b,c,d] = []) => {

    const pokemonApi = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/pokemon'
    })
    
    const promiseArr = [
            pokemonApi.get(`${ a }`),
            pokemonApi.get(`${ b }`),
            pokemonApi.get(`${ c }`),
            pokemonApi.get(`${ d }`)
    ]

     const [p1, p2, p3, p4] = await Promise.all(promiseArr)

     return[
         {name: p1.data.name, id:p1.data.id},
         {name: p2.data.name, id:p2.data.id},
         {name: p3.data.name, id:p3.data.id},
         {name: p4.data.name, id:p4.data.id},
         
     ]
} 

export default getPokemonOptions