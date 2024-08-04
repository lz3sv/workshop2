import { useEffect, useState } from "react"
import gamesAPI from "../../api/games-api"
import LatestItem from "./LatestItem"

export default function Home(){
    const [latestGames, setLatestGames]=useState([])
    useEffect(()=>{
        (async ()=>{

            const response= await gamesAPI.getAll()
            const result =Object.values(response)
            console.log(result)
            const resulta=result.reverse().slice(0,3)
            setLatestGames(resulta)
            console.log(resulta.length)
        })()
    },[])

    return (
        <section id="welcome-world">

        <div className="welcome-message">
            <h2>ALL new games are</h2>
            <h3>Only in GamesPlay</h3>
        </div>
        <img src="./images/four_slider_img01.png" alt="hero"/>

        <div id="home-page">
            <h1>Latest Games</h1>

            {/* <!-- Display div: with information about every game (if any) --> */}
            {latestGames.length>0 
            ? latestGames.map(game=><LatestItem key={game._id} {...game}/> )
            : <p className="no-articles">No games yet</p>
            }
        </div>
    </section>
    )
} 