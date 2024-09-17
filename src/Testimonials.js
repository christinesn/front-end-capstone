import './Testimonials.css'

const testimonials = [{
    rating: "Rating",
    name: "Name1",
    text: "Review text"
}, {
    rating: "Rating",
    name: "Name2",
    text: "Review text"
}, {
    rating: "Rating",
    name: "Name3",
    text: "Review text"
}]

export default function Testimonials () {
    return (
        <section id="testimonials">
            <h2>Testimonials</h2>
            <section>
                {testimonials.map((review) => (
                    <article key={review.name}>
                        <h3>{review.rating}</h3>
                        <div>{review.name}</div>
                        <div>{review.text}</div>
                    </article>
                ))}
            </section>
        </section>
    )
}