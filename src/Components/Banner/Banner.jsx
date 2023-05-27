import '../../CustomCSS/CustomCSS.css'

const Banner = () => {
    return (
        <section id="hero">
            <div className="hero container">
                <div>
                    <h1>Hello <span></span></h1>
                    <h1>My Name Is <span></span></h1>
                    <h1>Toybur Rahman<span></span></h1>
                    <a href="#" type="button" className="cta">Portfolio</a>
                </div>
                <div className="col-left">
                    <div className="about-img">
                        <img className=' banner-profile' src="https://i.ibb.co/4ZhCpPj/IMG-4111.jpg" alt="" />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Banner;