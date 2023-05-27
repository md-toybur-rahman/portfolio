

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact container">
                <div>
                    <h1 className="section-title">CONTACT <span>INFO</span></h1>
                </div>
                <div className="all-contact-items">
                    <div className="contact-items">
                        <div className="contact-item">
                            <div className="icon"><img src="https://i.ibb.co/kx48vpV/icons8-phone-64.png" alt="i" /></div>
                            <div className="contact-info">
                                <h1>Phone</h1>
                                <h2>01773345189</h2>
                            </div>
                        </div>
                    </div>
                    <div className="contact-items">
                        <div className="contact-item">
                            <div className="icon"><img src="https://i.ibb.co/4VLVT4R/icons8-email-64.png" alt="i" /></div>
                            <div className="contact-info">
                                <h1>Email</h1>
                                <h2>toyburrahman48@gmail.com</h2>
                            </div>
                        </div>
                    </div>
                    <div className="contact-items">
                        <div className="contact-item">
                            <div className="icon"><img src="https://i.ibb.co/KWk0B2m/icons8-address-64.png" alt="i" /></div>
                            <div className="contact-info">
                                <h1>Address</h1>
                                <h2>Lakshmipur-3700</h2>
                                <h2>Bangladesh</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;