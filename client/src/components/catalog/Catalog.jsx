import { useEffect, useState } from "react"

import * as gamesAPI from '../../api/games-api'
import GameListItem from "./game-list-item"

export default function Catalog(){
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
    
    
    
    return (
        <section id="catalog-page">
        <h1>All Games</h1>
        {/* <!-- Display div: with information about every game (if any) --> */}
            {games.length>0 
            ? games.map(game => <GameListItem key={game._id}{...game}/>)  
            : <h3 className="no-articles">No articles yet</h3> 
            }
        
        
    </section>
    )
} 