import AboutMe from "../Components/AboutMe/AboutMe";
import Banner from "../Components/Banner/Banner";
import Contact from "../Components/Contact/Contact";
import Projects from "../Components/Projects/Projects";
import Services from "../Components/Services/Services";


const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <Contact></Contact>
        </div>
    );
};

export default Main;