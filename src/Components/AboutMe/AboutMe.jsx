

const AboutMe = () => {
    return (
        <section id="about">
        <div className="about container">
            <div className="col-left">
                <div className="about-img">
                    <img src="https://i.ibb.co/4ZhCpPj/IMG-4111.jpg" alt="" />
                </div>
            </div>
            <div className="col-right">
                <h1 className="section-title">ABOUT <span>ME</span></h1>
                <h2>Front End Web Developer</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Illo maxime repudiandae soluta enim doloribus dicta 
                    repellat pariatur odio, unde possimus praesentium ipsum 
                    sed nulla voluptatibus exercitationem dolor, magni eveniet voluptate!</p>
                    <a href="#">Download Resume</a>
            </div>
        </div>
    </section>
    );
};

export default AboutMe;