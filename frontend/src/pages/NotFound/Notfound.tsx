import "./Notfound.css"

const Notfound = () => {
  return (
    <section className="home">
    <div className="home__container container">
        <div className="home__data">
            <span className="home__subtitle">Error 404</span>
            <h1 className="home__title">Hey Buddy</h1>
            <p className="home__description">
                We can't seem to find the page you are looking for.
            </p>
            <a href="#" className="home__button">
                Go Home
            </a>
        </div>

        <div className="home__img">
            <img src="https://i.ibb.co/Xb9f1yb/ghost-img.png" alt=""/>
            <div className="home__shadow"></div>
        </div>
    </div>

    <footer className="home__footer">
        <span>(+51) 982 668 882</span>
        <span>|</span>
        <span>utalk@company.com</span>
    </footer>
</section>
  )
}

export default Notfound
