import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { AuthContext } from "./contexts/AuthContext"

import GameList from "./components/game-list/GameList"
import Register from "./components/register/Register"
import GameCraete from "./components/game-create/GameCreate"
import GameEdit from "./components/game-edit/GameEdit"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import GameDetails from "./components/game-details/GameDetails"

function App() {

    // create a state to store the user's authentication state
    const [authstate, setAuthState] = useState({});

    // create a function to change the authentication state
    const changeAuthState = (state) => {
        // TODO validate state
        setAuthState(state);
    };

    // create a context object with the authentication state and the changeAuthState function
    const contextData = {
        userId: authstate._id,
        email: authstate.email,
        accessToken: authstate.accessToken,
        isAuthenticated: !!authstate.email,     // '!!' is used to convert falsy values to false and truthy values to true
        changeAuthState,
    }

    return (
        <AuthContext.Provider value={contextData}>   {/* Wrap the app with AuthContext.Provider - pass the contextData */}

        <div id="box">

            <Header />

            <main id="main-content">
                <Routes>

                    <Route path='/' element={<Home />} />

                    <Route path='/login' element={<Login />} />

                    <Route path='/register' element={<Register />} />

                    <Route path='/game/edit' element={<GameEdit />} />

                    <Route path='/games' element={<GameList />} />

                    <Route path='/games/:gameId/details' element={<GameDetails />} />
                                                
                    <Route path='/games/create' element={<GameCraete />} />
                    
                </Routes>

            </main>
        </div>

        </AuthContext.Provider>
    )
}

export default App
