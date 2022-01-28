import { useEffect, useState } from 'react';
import './Home.scss';
import Header from '../../components/Header/Header';
import HomeCard from '../../components/HomeCard/HomeCard';
import SideNav from '../../components/SideNav/SideNav';
import AboutCard from '../../components/AboutCard/AboutCard';
import EducationCard from '../../components/EducationCard/EducationCard';
import SkillsCard from '../../components/SkillsCard/SkillsCard';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import PortfoliosCard from '../../components/PortfoliosCard/PortfoliosCard';
import InterestCard from '../../components/InterestCard/InterestCard';
import TestimonialsCard from '../../components/TestimonialsCard/TestimonialsCard';
import BlogCard from '../../components/BlogCard/BlogCard';
import ContactCard from '../../components/ContactCard/ContactCard';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton';
import Loader from '../../components/Loader/Loader';

function Home() {
  const [topCheck, setTopCheck] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // entry.target.classList.remove("section");
            if (entry.target.classList.contains('section')) {
              // entry.target.style.visible="visible";
              entry.target.classList.add(
                'animate__animated',
                'animate__zoomIn'
              );
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    document.querySelectorAll('div').forEach((div) => {
      observer.observe(div);
    });
  });

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset === 0) {
        setTopCheck(true);
      } else {
        setTopCheck(false);
      }
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
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
      {!topCheck && <ScrollUpButton />}
    </>
  );
}

export default Home;
