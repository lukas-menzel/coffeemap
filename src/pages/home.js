import React, { Component } from "react"; 
import BGImageText from "../components/bg-image-w-text"
import PlacesList from"../components/places-list"
import CTA from "../components/cta-section"
import H2 from "../components/h2"
import About from "../components/about-section"

class HomePage extends Component {
    render() {    
        return (
            <div>
            <BGImageText
                headline="Coffeemap"
                subheadline="Discover interesting cafés in Berlin." />
                <div className="py-16"><H2 h2="All places" />
                <PlacesList />
                </div>
            <About />
            <CTA />
            </div>
            );
}
}
export default HomePage;
        