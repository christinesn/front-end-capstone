import { render, screen } from '@testing-library/react'
import BookingForm from './BookingForm'

describe('Booking form', () => {
    test('The BookingForm heading is rendered', () => {
        render(<BookingForm />)
        const headingElement = screen.getByText("Reserve a table")
        expect(headingElement).toBeInTheDocument()
    })
})

