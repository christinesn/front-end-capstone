import { updateTimes, initializeTimes } from './Main'

describe('Main', () => {
    test('initializeTimes returns the expected value', () => {
        const times = initializeTimes()
        expect(times[0]).toBe('17:00')
    })

    test('updateTimes returns the expected value', () => {
        const times = updateTimes()
        expect(times[0]).toBe('17:00')
    })
})