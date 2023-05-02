import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home'
import Game from './Game'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>

                <Route exact path='/' element={<Navigate to='home' />} />

                <Route path='home' element={<Home />} />

                <Route path='game' element={<Game />} />

            </Routes>
        </BrowserRouter>
    )
}