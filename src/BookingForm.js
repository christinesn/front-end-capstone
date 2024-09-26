import './BookingForm.css'

export default function BookingForm ({
    resDate,
    setResDate,
    resTime,
    setResTime,
    guests,
    setGuests,
    occasion,
    setOccasion,
    availableTimes,
    changeTimes
}) {
    function handleDateChange (e) {
        changeTimes({ date: e.target.value })
        setResDate(e.target.value)
    }

    return (
        <>
            <h2 className="sub-title">Reserve a table</h2>
            <form className="booking-form">
                <div className="form-item">
                    <label htmlFor="res-date">Date</label>
                    <input
                        type="date"
                        id="res-date"
                        value={resDate}
                        onChange={handleDateChange}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="res-time">Choose time</label>
                    <select
                        id="res-time"
                        value={resTime}
                        onChange={e => setResTime(e.target.value)}
                    >
                        {availableTimes && availableTimes.map((time) => (
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
        </>
    )
}