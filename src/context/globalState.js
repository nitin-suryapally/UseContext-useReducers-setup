import React, { createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";


const initialState = {
    // the required initial state 
}

// create the context with initial state

export const GlobalContext = createContext(initialState);

// creating provider component

export const GolbalProvider = ({children}) => {

    // using use reducer to dispatch actions

    const[state , dispatch] = useReducer(AppReducer , initialState);

    // define action and disptach here

    // const addMovieToWatchlist = (movie) => {
    //     dispatch({ type: "ADD_MOIVE_TO_WATCHLIST", payload: movie });
    //   };


    return(
        <GlobalContext.Provider 
            value={{
                // all the actions and state will be provided here
            }}
         >
            {children}
        </GlobalContext.Provider>
    )
}