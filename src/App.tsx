import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Solutions from "./components/Solutions";
import Reasons from "./components/Reasons";
import Showcase from "./components/Showcase";
import FAQs from "./components/FAQs";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import AboutHero from "./components/AboutHero";

import TeamImage from '/team.png'
import AboutTeam from "./components/AboutTeam";
import AboutMembers from "./components/AboutMembers";
import AboutPromo from "./components/AboutPromo";
import ContactHero from "./components/ContactHero";
import ContactSection from "./components/ContactSection";

function App() {
	const [activeTab, setActiveTab] = useState("home");

	const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setActiveTab('home');
			const element = document.body;
            if (element) {
                element.scrollIntoView({ block: 'start' });
            }
        } else if (location.pathname === '/about') {
            setActiveTab('about');
			const element = document.body;
            if (element) {
                element.scrollIntoView({ block: 'start' });
            }
        } else if (location.pathname === '/solutions') {
            setActiveTab('solutions');
			const element = document.getElementById('solutions');
            if (element) {
                element.scrollIntoView({ block: 'start' });
            }
        } else if (location.pathname === '/contact') {
            setActiveTab('contact');
			const element = document.body;
            if (element) {
                element.scrollIntoView({ block: 'start' });
            }
        }
		console.log(location.pathname, activeTab)
    }, [location, activeTab]);

	return <div>
		<Navbar />
		{
		(activeTab === "home" || activeTab === "solutions") && 
			<>
				<Hero />
				<Stats />
				<Solutions />
				<Reasons />
				<Showcase />
				<FAQs />
				<Newsletter />
			</>
		}
		{
		activeTab === "about" && 
			<>
				<AboutHero />
				<img src={TeamImage} alt="team" className="w-full" />
				<AboutTeam />
				<AboutMembers />
				<AboutPromo />
			</>
		}
		{
		activeTab === "contact" && 
			<>
				<ContactHero />
				<ContactSection />
			</>
		}
		<Footer />
	</div>;
}

export default App;
