import { useEffect } from 'react'
import './Home.scss'
import Header from '../../components/Header/Header'
import HomeCard from '../../components/HomeCard/HomeCard'
import SideNav from '../../components/SideNav/SideNav'
import AboutCard from '../../components/AboutCard/AboutCard'
import EducationCard from '../../components/EducationCard/EducationCard'
import SkillsCard from '../../components/SkillsCard/SkillsCard'
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard'
import PortfoliosCard from '../../components/PortfoliosCard/PortfoliosCard'
import InterestCard from '../../components/InterestCard/InterestCard'
import TestimonialsCard from '../../components/TestimonialsCard/TestimonialsCard'
import BlogCard from '../../components/BlogCard/BlogCard'
import ContactCard from '../../components/ContactCard/ContactCard'

function Home() {

    useEffect(() => {
        let observer = new IntersectionObserver((entries, observer) => { 
            entries.forEach(entry => {
            if(entry.isIntersecting){
                // entry.target.classList.remove("section");
                if(entry.target.classList.contains("section")){
                    // entry.target.style.visible="visible";
                    entry.target.classList.add("animate__animated", "animate__fadeInUp");
                }
                observer.unobserve(entry.target);
            }
            });
        }, {
            threshold: 0.25
        });
        
        document.querySelectorAll('div').forEach(div => { observer.observe(div) });
    })

    return (
        <>
            <SideNav />
            <Header />
            <HomeCard />
            <AboutCard />
            <EducationCard />
            <SkillsCard />
            <ExperienceCard />
            <PortfoliosCard />
            <InterestCard />
            <TestimonialsCard />
            <BlogCard />
            <ContactCard />
        </>
    );
}

export default Home;