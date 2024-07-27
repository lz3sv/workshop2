import requester from './requester'

const BASE_URL='http://localhost:3030/data/games'
export const getAll = async () => {
    const response= await requester.get(BASE_URL)
    const games=Object.values(response)
    //console.log(games)
    return games
}

export const getOne= (gameId) => requester.get(`${BASE_URL}/${gameId}`)

export const create= async (gameData) => {
    //console.log("from games-api")
    //console.log(gameData)
    await requester.post(`${BASE_URL}`,gameData)
    
}

const gamesAPI={
    getAll,
    getOne,
    create
}

export default gamesAPI