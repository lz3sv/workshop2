import requester from './requester'

const BASE_URL='http://localhost:3030/jsonstore/games'
export const getAll = async () => {
    const response= await requester.get(BASE_URL)
    const games=Object.values(response)
    console.log(games)
    return games
}

export const getOne= (gameId) => requester.get(`${BASE_URL}/${gameId}`)


const gamesAPI={
    getAll,
    getOne,
}

export default gamesAPI