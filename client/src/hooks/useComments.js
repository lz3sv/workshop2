import { useEffect, useReducer } from 'react'
import commentsAPI from '../api/comments-api'

export function useCreateComments() {
    const createHandler = (gameId, comment) => commentsAPI.create(gameId, comment)


    return createHandler
}

function commentReducer(state, action) {
    switch (action.type) {
        case 'GET_ALL':
            //console.log(action)
            return action.payload.slice()
        case 'ADD_COMMENT':
            //console.log(action)
            return [...state, action.payload]
        default:
            return state
    }

}


export function useGetAllComments(gameId) {
    const [comments, dispatch] = useReducer(commentReducer, [])
    //console.log('Wlizam za komentari!!!!!!')
    useEffect(() => {
        (async () => {
            //console.log('MINAWAM, DE!!!!!!')
            const result = await commentsAPI.getAll(gameId)
            //console.log(result)
            dispatch({ type: 'GET_ALL', payload: result })
        })()
    }, [gameId])

    return [comments, dispatch]

}