import avatarImg from '../assets/images/avt.jpg';
import portfoliosImgB1 from '../assets/images/big-1.jpg';
import portfoliosImg1 from '../assets/images/portfolio-1.jpg';
import portfoliosImg2 from '../assets/images/portfolio-2.jpg';
import portfoliosImgB2 from '../assets/images/big-2.jpg';
import portfoliosImg3 from '../assets/images/portfolio-3.jpg';
import portfoliosImg4 from '../assets/images/portfolio-4.jpg';
import clientImg1 from '../assets/images/client-1.png';
import clientImg2 from '../assets/images/client-2.png';
import clientImg3 from '../assets/images/client-3.png';
import logoImg1 from '../assets/images/logo1.png';
import logoImg2 from '../assets/images/logo2.png';
import logoImg3 from '../assets/images/logo3.png';
import logoImg4 from '../assets/images/logo4.png';
import logoImg5 from '../assets/images/logo5.png';
import logoImg6 from '../assets/images/logo6.png';
import logoImg7 from '../assets/images/logo7.png';
import logoImg8 from '../assets/images/logo8.png';
import logoImg9 from '../assets/images/logo9.png';
import blogImg1 from '../assets/images/blog-1.png';
import blogImg2 from '../assets/images/blog-2.png';
import blogImg3 from '../assets/images/blog-3.png';
import educationImg1 from '../assets/images/demo-gra.jpg';

export const navLinks = [
  {
    title: 'Home',
    href: '#header',
    classIconFA: 'fa fa-user',
  },
  {
    title: 'About',
    href: '#about',
    classIconFA: 'fa fa-dashboard',
  },
  {
    title: 'Education',
    href: '#education',
    classIconFA: 'fa fa-graduation-cap',
  },
  {
    title: 'Skills',
    href: '#skills',
    classIconFA: 'fa fa-sliders',
  },
  {
    title: 'Experience',
    href: '#experience',
    classIconFA: 'fa fa-suitcase',
  },
  {
    title: 'Portfolios',
    href: '#portfolios',
    classIconFA: 'fa fa-archive',
  },
  {
    title: 'Interest',
    href: '#interest',
    classIconFA: 'fa fa-heart',
  },
  {
    title: 'Testimonials',
    href: '#testimonials',
    classIconFA: 'fa fa-users',
  },
  // {
  //     title: 'Pricing',
  //     href: '#pricing',
  //     classIconFA: 'fa fa-money'
  // },
  {
    title: 'Blog',
    href: '#blog',
    classIconFA: 'fa fa-pencil-square',
  },
  {
    title: 'Contact',
    href: '#contact',
    classIconFA: 'fa fa-envelope',
  },
];

export const profileInfo = {
  name: 'Tran Huu Thanh',
  job: 'Software Engineer & UI/UX Expert',
  email: 'thanh0949759123@gmail.com',
  website: ' thanhwebsite.com',
  skype: 'thanh0949759123@gmail.com',
  phone: '+84919978345',
  address: '180/9c TT, CL, BT',
  avatarUrl: avatarImg,
};

export const aboutData = {
  description: `Hello! I'm Thanh Tran. Senior Web Developer with over 1 years of experience specializing in front end development. 
                Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including 
                advanced HTML5, CSS, CSS3, SCSS, SASS, JSON, XML, Java, JS, ReactJS. Strong background in management and leadership.`,
};

export const educationData = [
  {
    title: 'Preparatory Education',
    place: 'Fedrick School',
    time: 'Jan 1997 - Mar 2000',
    img: educationImg1,
    imgAlt: 'education',
    description:
      'I completed my preparatory education from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
  },
  {
    title: 'High School',
    place: 'RedStreet College',
    time: 'Jan 2000 - Mar 2005',
    description:
      'I completed my high school degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
  },
  {
    title: 'Computer Science',
    place: 'Down Street College',
    time: 'Jan 2006 - Mar 2008',
    description:
      'I completed my computer science degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
  },
  {
    title: 'Software Engineering',
    place: 'Oxford University',
    time: 'Jan 2009 - Mar 2010',
    description:
      'I completed this degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
  },
  {
    title: 'Web Development',
    place: 'Lipro University',
    time: 'Jan 2011 - Mar 2012',
    img: educationImg1,
    imgAlt: 'education',
    description:
      'I completed this course from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
  },
];

export const skillsData = [
  {
    title: 'Professional',
    contents: [
      {
        title: 'HTML5',
        progress: '95%',
      },
      {
        title: 'CSS3',
        progress: '90%',
      },
      {
        title: 'JS',
        progress: '85%',
      },
      {
        title: 'PHP',
        progress: '75%',
      },
    ],
  },
  {
    title: 'Personal',
    contents: [
      {
        title: 'Communication',
        progress: '75%',
      },
      {
        title: 'Teamwork',
        progress: '60%',
      },
      {
        title: 'Creativity',
        progress: '70%',
      },
      {
        title: 'Dedication',
        progress: '80%',
      },
    ],
  },
  {
    title: 'Software',
    contents: [
      {
        title: 'Adobe Illustrator',
        progress: '60%',
      },
      {
        title: 'Adobe InDesign',
        progress: '80%',
      },
      {
        title: 'PHP Storm',
        progress: '75%',
      },
      {
        title: 'Dev Console',
        progress: '80%',
      },
    ],
  },
];

export const experienceData = [
  {
    title: 'Designer',
    place: 'RulerSoft',
    time: 'Jan 2010 - Mar 2012',
    description:
      'I started my designing carrier here, spent tow years learning and working in various designing aspects.',
  },
  {
    title: 'Frontend Developer',
    place: 'Micro IT',
    time: 'Jan 2012 - Mar 2014',
    img: educationImg1,
    description:
      'I started my frontend carrier here, spent tow years learning and working in various frontend aspects. I worked on about 40+ projects local and online.',
  },
  {
    title: 'UI/UX Expert',
    place: 'Libra IT Solutions',
    time: 'Jan 2014 - Mar 2015',
    description:
      'I started my expertise carrier here, spent tow years learning and working in various UX/UI aspects. I worked on about 70+ projects local and online.',
  },
  {
    title: 'Senior Developer',
    place: 'WebStyle Technologies',
    time: 'Jan 2016 - Continue...',
    description:
      'I recently joined here, currently working on various development aspects. I already worked on about.',
  },
];

export const portfoliosData = [
  {
    type: 'logo',
    items: [
      {
        title: 'lightbox',
        type: 'photo',
        text: 'Two Hover Effect For Portfolio Grid Blocks. Its Scale',
        thumbnail: portfoliosImgB1,
        url: portfoliosImgB1,
        alt: 'portfolios',
      },
      {
        title: 'lightbox',
        type: 'video',
        text: 'Two Hover Effect For Portfolio Grid Blocks. Its Scale',
        thumbnail: portfoliosImg1,
        url: 'https://player.vimeo.com/video/45830194?h=2c5541d8bc&color=ffffff&title=0&byline=0&portrait=0&badge=0',
        alt: 'portfolios',
      },
      {
        title: 'lightbox',
        type: 'photo',
        text: 'Two Hover Effect For Portfolio Grid Blocks. Its Scale',
        thumbnail: portfoliosImg2,
        url: portfoliosImg2,
        alt: 'portfolios',
      },
    ],
  },
  {
    type: 'dribble',
    items: [
      {
        title: 'lightbox',
        type: 'photo',
        text: 'Two Hover Effect For Portfolio Grid Blocks. Its Scale',
        thumbnail: portfoliosImgB2,
        url: portfoliosImgB2,
        alt: 'portfolios',
      },
      {
        title: 'lightbox',
        type: 'photo',
        text: 'Two Hover Effect For Portfolio Grid Blocks. Its Scale',
        thumbnail: portfoliosImg3,
        url: portfoliosImg3,
        alt: 'portfolios',
      },
      {
        title: 'lightbox',
        type: 'photo',
        text: 'Two Hover Effect For Portfolio Grid Blocks. Its Scale',
        thumbnail: portfoliosImg4,
        url: portfoliosImg4,
        alt: 'portfolios',
      },
    ],
  },
  {
    type: 'websites',
    items: [
      {
        title: 'single',
        type: 'url',
        text: 'Two Hover Effect For Portfolio Grid Blocks. Its Scale',
        thumbnail: portfoliosImgB1,
        url: 'https://www.youtube.com/watch?v=Mf6I68db-R8',
        alt: 'portfolios',
      },
      {
        title: 'single',
        type: 'url',
        text: 'Two Hover Effect For Portfolio Grid Blocks. Its Scale',
        thumbnail: portfoliosImg1,
        url: 'https://www.youtube.com/watch?v=O_vzVAKTsV8',
        alt: 'portfolios',
      },
      {
        title: 'single',
        type: 'url',
        text: 'Two Hover Effect For Portfolio Grid Blocks. Its Scale',
        thumbnail: portfoliosImg2,
        url: 'https://www.youtube.com/watch?v=P0iO3iSSqbM',
        alt: 'portfolios',
      },
      {
        title: 'single',
        type: 'url',
        text: 'Two Hover Effect For Portfolio Grid Blocks. Its Scale',
        thumbnail: portfoliosImgB2,
        url: 'https://www.youtube.com/watch?v=WZgW2yWHr5s',
        alt: 'portfolios',
      },
      {
        title: 'single',
        type: 'url',
        text: 'Two Hover Effect For Portfolio Grid Blocks. Its Scale',
        thumbnail: portfoliosImg3,
        url: 'https://www.youtube.com/watch?v=vwRlKqDltlI',
        alt: 'portfolios',
      },
      {
        title: 'single',
        type: 'url',
        text: 'Two Hover Effect For Portfolio Grid Blocks. Its Scale',
        thumbnail: portfoliosImg4,
        url: 'https://www.youtube.com/watch?v=Rh85Vqummy8',
        alt: 'portfolios',
      },
    ],
  },
];

export const interestData = {
  description: `First of all I love music, country music is my favorite. Love watching football, movies and playing games with my buddies. 
                I spend quite a lot of time in traveling and photography, these keeps me fresh for working environment. 
                I also spend time volunteering at the Red Cross in London, UK each month.`,
  interests: [
    {
      title: 'volleyball',
      classIconFA: 'fas fa-volleyball-ball',
    },
    {
      title: 'football',
      classIconFA: 'fas fa-futbol',
    },
    {
      title: 'gaming',
      classIconFA: 'fas fa-gamepad',
    },
    {
      title: 'music',
      classIconFA: 'fas fa-music',
    },
    {
      title: 'travelling',
      classIconFA: 'fas fa-plane',
    },
    {
      title: 'coding',
      classIconFA: 'fas fa-code',
    },
  ],
};

export const clientData = [
  {
    avt: clientImg1,
    description: `I work with John on several web development projects and 
                    I find him to be extremely creative and a technical Front End Developer. 
                    Jone expertise involves building complex Responsive Design layouts using HTML 5, CSS3, and JavaScript. 
                    I work with John on several web development projects and I find him to be extremely
                    creative and a technical Front End Developer. Jone expertise involves building complex
                    Responsive Design layouts using HTML 5, CSS3, and JavaScript.`,
    signature: 'Mike, CEO, IT World',
  },
  {
    avt: clientImg2,
    description: `I work with John on several web development projects and I find him to be extremely
                    creative and a technical Front End Developer.`,
    signature: 'Mike, CEO, IT World',
  },
  {
    avt: clientImg3,
    description: `I work with John on several web development projects and I find him to be extremely
                    creative and a technical Front End Developer. Jone expertise involves building
                    complex Responsive Design layouts using HTML 5, CSS3, and JavaScript.`,
    signature: 'Mike, CEO, IT World',
  },
];

export const clientLogoData = [
  {
    name: 'logo1',
    src: logoImg1,
  },
  {
    name: 'logo2',
    src: logoImg2,
  },
  {
    name: 'logo3',
    src: logoImg3,
  },
  {
    name: 'logo4',
    src: logoImg4,
  },
  {
    name: 'logo5',
    src: logoImg5,
  },
  {
    name: 'logo6',
    src: logoImg6,
  },
  {
    name: 'logo7',
    src: logoImg7,
  },
  {
    name: 'logo8',
    src: logoImg8,
  },
  {
    name: 'logo9',
    src: logoImg9,
  },
];

export const blogData = [
  {
    title: 'material design',
    content: `Web design encompasses many different skills and disciplines in the production 
                of websites.Web design include web graphic design, interface design etc.`,
    img: {
      src: blogImg1,
      caption: {
        author: 'Thanh Tran',
        time: 'May 05 2018',
        cmt: 98,
      },
    },
    forward: '/',
  },
  {
    title: 'development shortcut',
    content: `Web development is a broad term for the work involved in developing a web site 
                for the Internet or an intranet. Now lets get a bit deeper in this topic`,
    img: {
      src: blogImg2,
      caption: {
        author: 'Thanh Tran',
        time: 'May 05 2018',
        cmt: 98,
      },
    },
    forward: '/',
  },
  {
    title: 'a good ui',
    content: `The user interface (UI), in the industrial design field of human–machine interaction, 
                is the space where interactions between humans and machines occur.`,
    img: {
      src: blogImg3,
      caption: {
        author: 'Thanh Tran',
        time: 'May 05 2018',
        cmt: 98,
      },
    },
    forward: '/',
  },
];
