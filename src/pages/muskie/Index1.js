import React, { Component } from 'react';
import NavbarPage from "../../components/Navbar/Navbar_Page";
import Section from './section';
import Service from "../../components/Service/service";
import Footer from "../../components/Footer/footer";
import About from '../../components/About/about';
import GetInTouch from '../../components/Contact/get-in-touch';

class Muskie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems: [
                { id: 1, idnm: "home", navheading: "Home" },
                { id: 2, idnm: "about", navheading: "About Us" },
                { id: 3, idnm: "services", navheading: "Services" },
                { id: 4, idnm: "contact", navheading: "Contact Us" }
            ],
            pos: document.documentElement.scrollTop,
            imglight: false,
            navClass: ""
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > this.state.pos) {
            this.setState({ navClass: "nav-sticky", imglight: false });
        }
        else {
            this.setState({ navClass: "", imglight: false });
        }
    };

    render() {
        return (
            <React.Fragment>

                {/* Importing Navbar */}
                <NavbarPage navItems={this.state.navItems} navClass={this.state.navClass} imglight={this.state.imglight} />

                {/* Importing section */}
                <Section />

                {/* Importing section */}
                <About />

                {/* Importing Service */}
                <Service />

                {/* Importing Service */}
                <GetInTouch />
                
                {/* Importing Footer */}
                <Footer />
            </React.Fragment>
        );
    }
}

export default Muskie;