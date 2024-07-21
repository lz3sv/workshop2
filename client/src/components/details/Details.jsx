import { useEffect, useState } from "react"
import {Link, useParams} from 'react-router-dom'

import gamesAPI from "../../api/games-api"
import commentsApi from "../../api/comments-api"

export default function Details(){
    const [game, setGame]=useState({})
    const [userName, setUserName]=useState('')
    const [comment, setComment]=useState('')
    const { gameId }=useParams()

    useEffect(()=>{
        (async ()=>{
            const result= await gamesAPI.getOne(gameId)
            //console.log(result)
            setGame(result)
        })()
    },[])

    const commentSubmitHandler= async (e) => {
        e.preventDefault()
        console.log ('Data sublitted')
        console.log(userName)
        console.log(comment)
        await commentsApi.create(gameId, userName, comment)
    }
    return (
        <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">

            <div className="game-header">
                <img className="game-img" src={game.imageUrl} />
                <h1>{game.title}</h1>
                <span className="levels">MaxLevel: {game.maxLevel}</span>
                <p className="type">{game.category}</p>
            </div>

            <p className="text">
                {game.summary}
            </p>

            {/* <!-- Bonus ( for Guests and Users ) --> */}
            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {/* <!-- list all comments for current game (If any) --> */}
                    <li className="comment">
                        <p>Content: I rate this one quite highly.</p>
                    </li>
                    <li className="comment">
                        <p>Content: The best game.</p>
                    </li>
                </ul>
                {/* <!-- Display paragraph: If there are no games in the database --> */}
                <p className="no-comment">No comments.</p>
            </div>

            {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
            <div className="buttons">
                <Link to="#" className="button">Edit</Link>
                <Link to="#" className="button">Delete</Link>
            </div>
        </div>

        {/* <!-- Bonus --> */}
        {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={commentSubmitHandler}>
                <input 
                    type="text"
                    placeholder="Pesho"
                    name='username'
                    onChange={(e)=> setUserName(e.target.value)}
                    value={userName}
                />
                
                <textarea 
                    name="comment" 
                    placeholder="Comment......"
                    onChange={(e)=> setComment(e.target.value)}
                    value={comment}> 
                </textarea>
                <input className="btn submit" type="submit" value="Add Comment"/>
            </form>
        </article>

    </section>
    )
} 