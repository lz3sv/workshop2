import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useGetOneGames } from "../../hooks/useGames"
import { useEffect, useMemo } from "react"
import gamesAPI from "../../api/games-api"

const initialValues={
    title:'',
    category:'',
    maxLevel:'',
    imageUrl:'',
    summary:'',
}

export default function Edit(){
    const navigate=useNavigate()
    const {gameId} = useParams()
    //console.log(gameId)
    const [game, setGame]=useGetOneGames(gameId)
    const initialFormValues=useMemo(()=> Object.assign(initialValues,game),[game])
    //console.log(game)
    const{
        changeHandler,
        submitHandler,
        values,
    }=useForm(initialFormValues,async (values)=>{
       const updatedGame= await gamesAPI.update(gameId,values)

        console.log(updatedGame)
        navigate(`/catalog/${gameId}/details`)
    })






    return (
        <section id="edit-page" className="auth">
        <form id="edit" onSubmit={submitHandler}>
            <div className="container">

                <h1>Edit Game</h1>
                <label htmlFor="leg-title">Legendary title:</label>
                <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    value={values.title}
                    onChange={changeHandler}
                />

                <label htmlFor="category">Category:</label>
                <input 
                    type="text" 
                    id="category" 
                    name="category" 
                    value={values.category}
                    onChange={changeHandler}
                />

                <label htmlFor="levels">MaxLevel:</label>
                <input 
                    type="number" 
                    id="maxLevel" 
                    name="maxLevel" 
                    min="1" 
                    value={values.maxLevel}
                    onChange={changeHandler}
                />

                <label htmlFor="game-img">Image:</label>
                <input 
                    type="text" 
                    id="imageUrl" 
                    name="imageUrl" 
                    value={values.imageUrl}
                    onChange={changeHandler}
                />

                <label htmlFor="summary">Summary:</label>
                <textarea 
                    name="summary" 
                    id="summary"
                    onChange={changeHandler}
                    value={values.summary}
                ></textarea>


                <input className="btn submit" type="submit" value="Edit Game"/>

            </div>
        </form>
    </section>
    )
} 