import Home from './Home'
import Booking from './Booking'
import { Route, Routes } from 'react-router-dom'

export default function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/booking" element={<Booking />}></Route>
            </Routes>
        </main>
    )
}