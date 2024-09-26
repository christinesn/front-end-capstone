import BookingForm from "./BookingForm"

export default function Booking ({
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
    return (
        <section className="container">
            <h2 className="sub-title">
                Reserve a table
            </h2>
            <BookingForm
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
        </section>
    )
}