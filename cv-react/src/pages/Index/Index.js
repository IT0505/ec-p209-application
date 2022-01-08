import { useEffect } from 'react'
import './Index.scss'
import avatarImg from '../../assets/images/avt.jpg'
import Header from '../../components/Header/Header'
import HomeCard from '../../components/HomeCard/HomeCard'
import SideNav from '../../components/SideNav/SideNav'
import AboutCard from '../../components/AboutCard/AboutCard'
import EducationCard from '../../components/EducationCard/EducationCard'
import SkillsCard from '../../components/SkillsCard/SkillsCard'
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard'

const profileInfo = {
    name: 'Tran Huu Thanh',
    job: 'Software Engineer & UI/UX Expert',
    email: 'thanh0949759123@gmail.com',
    website: ' thanhwebsite.com',
    skype: 'thanh0949759123@gmail.com',
    phone: '+84919978345',
    address: '180/9c TT, CL, BT',
    avatarUrl: avatarImg
}

const aboutContent = {
    discription: `Hello! I'm Thanh Tran. Senior Web Developer with over 1 years of experience specializing in front end development. 
                Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including 
                advanced HTML5, CSS, CSS3, SCSS, SASS, JSON, XML, Java, JS, ReactJS. Strong background in management and leadership.`
}

const educationContents = [
    {
        title: 'Preparatory Education',
        place: 'Fedrick School',
        time: 'Jan 1997 - Mar 2000',
        discription: 'I completed my preparatory education from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.'
    },
    {
        title: 'High School',
        place: 'RedStreet College',
        time: 'Jan 2000 - Mar 2005',
        discription: 'I completed my high school degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.'
    },
    {
        title: 'Computer Science',
        place: 'Down Street College',
        time: 'Jan 2006 - Mar 2008',
        discription: 'I completed my computer science degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.'
    },
    {
        title: 'Software Engineering',
        place: 'Oxford University',
        time: 'Jan 2009 - Mar 2010',
        discription: 'I completed this degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.'
    },
    {
        title: 'Web Development',
        place: 'Lipro University',
        time: 'Jan 2011 - Mar 2012',
        discription: 'I completed this course from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.'
    }
]

const skillsContents = {
    professional: [
        {
            title: 'HTML5',
            progress: '95%'
        },
        {
            title: 'CSS3',
            progress: '90%'
        },
        {
            title: 'JS',
            progress: '85%'
        },
        {
            title: 'PHP',
            progress: '75%'
        }
    ],
    personal: [
        {
            title: 'Communication',
            progress: '75%'
        },
        {
            title: 'Teamwork',
            progress: '60%'
        },
        {
            title: 'Creativity',
            progress: '70%'
        },
        {
            title: 'Dedication',
            progress: '80%'
        }
    ],
    software: [
        {
            title: 'Adobe Illustrator',
            progress: '60%'
        },
        {
            title: 'Adobe InDesign',
            progress: '80%'
        },
        {
            title: 'PHP Storm',
            progress: '75%'
        },
        {
            title: 'Dev Console',
            progress: '80%'
        }
    ]
}

const experienceContents = [
    {
        title: 'Designer',
        place: 'RulerSoft',
        time: 'Jan 2010 - Mar 2012',
        discription: 'I started my designing carrier here, spent tow years learning and working in various designing aspects.'
    },
    {
        title: 'Frontend Developer',
        place: 'Micro IT',
        time: 'Jan 2012 - Mar 2014',
        discription: 'I started my frontend carrier here, spent tow years learning and working in various frontend aspects. I worked on about 40+ projects local and online.'
    },
    {
        title: 'UI/UX Expert',
        place: 'Libra IT Solutions',
        time: 'Jan 2014 - Mar 2015',
        discription: 'I started my expertise carrier here, spent tow years learning and working in various UX/UI aspects. I worked on about 70+ projects local and online.'
    },
    {
        title: 'Senior Developer',
        place: 'WebStyle Technologies',
        time: 'Jan 2016 - Continue...',
        discription: 'I recently joined here, currently working on various development aspects. I already worked on about.'
    }
]

function Index() {

    const handleSectionVisible = () => {
        const home = document.getElementById('home');
        const about = document.getElementById('about');
        const education = document.getElementById('education');
        const skills = document.getElementById('skills');
        const experience = document.getElementById('experience');

        if(home) {
            if (document.documentElement.scrollTop > home.getBoundingClientRect().top - 800 && home.style.visibility === '') {
                home.className += ' animate__animated animate__zoomInUp';
                home.style.visibility = 'visible';
            }
        }
        if(about) {
            if (document.documentElement.scrollTop > about.getBoundingClientRect().top - 800 && about.style.visibility === '') {
                about.className += ' animate__animated animate__zoomInUp';
                about.style.visibility = 'visible';
            }
        }
        if(education) {
            if (document.documentElement.scrollTop > education.getBoundingClientRect().top - 800 && education.style.visibility === '') {
                education.className += ' animate__animated animate__zoomInUp';
                education.style.visibility = 'visible';
            }
        }
        if(skills) {
            if (document.documentElement.scrollTop > skills.getBoundingClientRect().top && skills.style.visibility === '') {
                skills.className += ' animate__animated animate__zoomInUp';
                skills.style.visibility = 'visible';
            }
        }
        if(experience) {
            if (document.documentElement.scrollTop > experience.getBoundingClientRect().top && experience.style.visibility === '') {
                experience.className += ' animate__animated animate__zoomInUp';
                experience.style.visibility = 'visible';
            }
        }
    }

    useEffect(() => {
        window.onload = () => {
            handleSectionVisible();
        }
        window.onscroll = () => {
            handleSectionVisible();
        }
    })

    return (
        <>
            <SideNav name={profileInfo.name.slice(0, 1)}/>
            <Header />
            <HomeCard profileInfo={profileInfo} />
            <AboutCard aboutContent={aboutContent}/>
            <EducationCard educationContents={educationContents}/>
            <SkillsCard skillsContents={skillsContents} />
            <ExperienceCard experienceContents={experienceContents}/>
        </>
    );
}

export default Index;