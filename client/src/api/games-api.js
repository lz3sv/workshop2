import * as request from './requester'

const BASE_URL='http://localhost:3030/jasonstore/games'
export const getAll = () => request.get(BASE_URL)