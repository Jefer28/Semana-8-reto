const Hero = () => {
    return (
        <article className="hero">
            {/* <img src="/cheems-meme.png" alt="Fondo de portada" className="img img--background" /> */}
            <div className="container g-layout g-layout--center md:g-layout--1-1 gap-sm">
                <div className="card"/*  style={{ position: 'relative' }} */>
                    <div className="card__body">
                        <h1 className="card__subtitle">Stickers <span className="card__subtitle__span">Pet Love</span></h1>
                        <h2 className="card__title">Stickers adorables para amantes de perritos y gatitos</h2>
                        <p className="card__text">¡Llena tus conversaciones de ternura con nuestros encantadores stickers de perritos y gatitos!</p>
                    </div>
                </div>
                <div className="hero__images">
                    <img src="/perrito-logo-web.webp" alt="Imagen de portada de Elliot Garamendi" width={256} height={256} className="img img--hero" />
                    <div className="hero__technologies">
                        <img src="/perrito-logo-web.webp" alt="HTML" width={64} height={64} className="hero__technology rotate" />
                        <img src="/perrito-logo-web.webp" alt="CSS" width={64} height={64} className="hero__technology rotate" />
                        <img src="/perrito-logo-web.webp" alt="JavaScript" width={64} height={64} className="hero__technology rotate" />
                        <img src="/perrito-logo-web.webp" alt="React" width={64} height={64} className="hero__technology rotate" />
                    </div>
                </div>
            </div>
        </article>
    );
};
export default Hero;