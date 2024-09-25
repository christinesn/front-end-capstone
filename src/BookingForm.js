import './BookingForm.css'
import { useState } from 'react'

export default function BookingForm () {
    const resTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ]

    const [resDate, setResDate] = useState()
    const [resTime, setResTime] = useState(resTimes[0])
    const [guests, setGuests] = useState('1')
    const [occasion, setOccasion] = useState('')

    return (
        <form className="booking-form">
            <div className="form-item">
                <label htmlFor="res-date">Date</label>
                <input
                    type="date"
                    id="res-date"
                    value={resDate}
                    onChange={e => setResDate(e.target.value)}
                />
            </div>
            <div className="form-item">
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    value={resTime}
                    onChange={e => setResTime(e.target.value)}
                >
                    {resTimes.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-item">
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1" max="10"
                    id="guests"
                    value={guests}
                    onChange={e => setGuests(e.target.value)}
                />
            </div>
            <div className="form-item">
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={e => setOccasion(e.target.value)}
                >
                    <option value="">Select an occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>
            </div>
            <input type="submit" value="Make your reservation" />
        </form>
    )
}