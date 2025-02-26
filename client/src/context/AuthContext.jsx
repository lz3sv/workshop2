import { createContext, useContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext=createContext({
        userId:'',
        email: '',
        accessToken: '',
        isAuthenticated: false,
        changeAuthState: (authState={})=> null,
        logout: ()=> null,
})

export function AuthContextProvider(props){
        const [authState, setAuthState] = usePersistedState('auth',{})
        const changeAuthState=(state)=> {
                //to do quick solution
                localStorage.setItem('accessToken', state.accessToken)
                setAuthState(state)
        }

        const logout =()=>{
                setAuthState(null)
        }

        const contextData={
                email: authState?.email,
                userId: authState?._id,
                accessToken: authState?.accessToken,
                isAuthenticated: !!authState?.email,
                changeAuthState,
                logout,
        }
        return (
                <AuthContext.Provider value={contextData}>
                        {props.children}
                </AuthContext.Provider>



        )
}

export function useAuthContext(){
        const authData=useContext(AuthContext)
        return authData
}