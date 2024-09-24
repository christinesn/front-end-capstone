import './About.css'

export default function About () {
    return (
        <section id="about">
            <div className="container">
                <article className="about-info">
                    <h2 className="display-title">Little Lemon</h2>
                    <span className="sub-title">Chicago</span>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </article>
                <article>
                    <img src="/images/ownersA.jpg" alt="" />
                    <img src="/images/ownersB.jpg" alt="" />
                </article>
            </div>
        </section>
    )
}