import Home from './Home'
import Booking from './Booking'
import { Route, Routes } from 'react-router-dom'
import { useState, useReducer } from 'react'
import { fetchAPI, submitAPI } from './API'

export function updateTimes (_prevState, { date }) {
    return fetchAPI(new Date(date))
}

export function initializeTimes () {
    return fetchAPI(new Date())
}

export default function Main() {
    const [availableTimes, changeTimes] = useReducer(
        updateTimes,
        initializeTimes()
    )

    const today = new Date()
    // Turn date into input value string, i.e. "2024-09-26"
    const todayFormatted = today.getFullYear() + '-'
        + ('0' + (today.getMonth()+1)).slice(-2) + '-'
        + ('0' + today.getDate()).slice(-2)

    const [resDate, setResDate] = useState(todayFormatted)
    const [resTime, setResTime] = useState()
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