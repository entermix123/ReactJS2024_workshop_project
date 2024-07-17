import GameList from "./components/game-list/GameList"
import Register from "./components/register/Register"
import GameCraete from "./components/game-create/GameCreate"
import GameEdit from "./components/game-edit/GameEdit"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"

import { Routes, Route } from "react-router-dom"

function App() {
    return (
        <div id="box">

            <Header />

            <main id="main-content">
                <Routes>

                    <Route path='/' element={<Home />} />

                    <Route path='/login' element={<Login />} />

                    <Route path='/register' element={<Register />} />

                    <Route path='/game/edit' element={<GameEdit />} />

                    <Route path='/games' element={<GameList />} />
                                                
                    <Route path='/games/create' element={<GameCraete />} />
                </Routes>

            </main>
        </div>
    )
}

export default App
