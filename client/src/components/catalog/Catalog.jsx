import { useEffect } from "react"
import requester from "../../api/requester"
import * as request from '../../api/requester'
import * as gamesAPI from '../../api/games-api'

export default function Catalog(){
    const [games.setGames]=useState ([])
    
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
        <div className="allGames">
            <div className="allGames-info">
                <img src="./images/avatar-1.jpg"/>
                <h6>Action</h6>
                <h2>Cover Fire</h2>
                <a href="#" className="details-button">Details</a>
            </div>

        </div>
        <div className="allGames">
            <div className="allGames-info">
                <img src="./images/avatar-1.jpg"/>
                <h6>Action</h6>
                <h2>Zombie lang</h2>
                <a href="#" className="details-button">Details</a>
            </div>

        </div>
        <div className="allGames">
            <div className="allGames-info">
                <img src="./images/avatar-1.jpg"/>
                <h6>Action</h6>
                <h2>MineCraft</h2>
                <a href="#" className="details-button">Details</a>
            </div>
        </div>

        {/* <!-- Display paragraph: If there is no games  --> */}
        <h3 className="no-articles">No articles yet</h3>
    </section>
    )
} 