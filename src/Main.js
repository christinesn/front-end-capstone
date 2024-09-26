import Home from './Home'
import Booking from './Booking'
import { Route, Routes } from 'react-router-dom'
import { useState, useReducer } from 'react'

export default function Main() {
    function updateTimes (action) {
        return [
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00'
        ]
    }

    function initializeTimes () {
        return [
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00'
        ]
    }

    const [availableTimes, changeTimes] = useReducer(
        updateTimes,
        initializeTimes()
    )

    const [resDate, setResDate] = useState()
    const [resTime, setResTime] = useState(availableTimes[0])
    const [guests, setGuests] = useState('1')
    const [occasion, setOccasion] = useState('')

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/booking" element={
                    <Booking
                        resDate={resDate}
                        setResDate={setResDate}
                        resTime={resTime}
                        setResTime={setResTime}
                        guests={guests}
                        setGuests={setGuests}
                        occasion={occasion}
                        setOccasion={setOccasion}
                        availableTimes={availableTimes}
                        changeTimes={changeTimes}
                    />
                }></Route>
            </Routes>
        </main>
    )
}