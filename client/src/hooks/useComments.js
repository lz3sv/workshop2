import { useEffect, useState } from 'react'
import commentsAPI from '../api/comments-api'

export function useCreateComments(){
    const createHandler=(gameId, comment)=> commentsAPI.create(gameId,comment)
    

    return createHandler
}


export function useGetAllComments(gameId){
    const [comments, setComments]=useState([])
    //console.log('Wlizam za komentari!!!!!!')
    useEffect(()=>{
        (async ()=>{
            //console.log('MINAWAM, DE!!!!!!')
            const result=await commentsAPI.getAll(gameId)
            //console.log(result)
            setComments(result)
        })()
    },[gameId])

    return [comments, setComments]

}