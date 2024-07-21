import * as request from './requester'

const BASE_URL='http://localhost:3030/jsonstore/games'
export const getAll = async () => {
    const response= await request.get(BASE_URL)
    const games=Object.values(response)
    console.log(games)
    return games
}

export const getOne= (gameId) => request.get(`${BASE_URL}/${gameId}`)


const gamesAPI={
    getAll,
    getOne,
}

export default gamesAPI