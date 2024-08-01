import { useEffect, useState } from "react"
import gamesAPI from "../api/games-api"



export function useGetAllGames(){
    const [games,setGames]=useState ([])
    
    useEffect(()=> {

        gamesAPI.getAll()
            .then(result=>setGames(result))
       //( async() =>{
             //const gamesResults = await requester('GET','http://localhost:3030/jsonstore/games')
             //const gamesResults = await request.get('http://localhost:3030/jsonstore/games')
             //console.log(gamesResult)
        //})()
    },[])

    return [games, setGames]
}

export function useGetOneGames(gameId){
const [game, setGame]=useState({})
    useEffect(()=>{
        (async ()=>{
            const result= await gamesAPI.getOne(gameId)
            //console.log(result)
            setGame(result)
        })()
    },[gameId])

    return [
        game, 
        setGame,
    ]

}

export function useCreateGame(){
    const gameCreateHandler = (gameData)=> gamesAPI.create(gameData)
    return gameCreateHandler
}