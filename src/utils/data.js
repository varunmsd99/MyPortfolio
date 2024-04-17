import { Linkedin, GithubIcon, Twitter, Code, MonitorSmartphone, Compass, Soup, Gamepad2, AppWindow, AudioLines} from 'lucide-react'
import foodVilla from '../images/foodVilla.png'
import portfolio from '../images/portfolio.png'
import wipro from '../images/wipro.png'
import school from '../images/school.png'
import inter from '../images/inter.png'
import mvgr from '../images/mvgr.png'

export const HeaderData = [
  {
    id: "home",
    text: "Home",
  },
    {
      id: "about",
      text: "About",
    },
    {
      id: "skills",
      text: "Skills",
    },
    {
      id: "projects",
      text: "Projects",
    },
    {
      id: "experience",
      text: "Experience",
    },
    {
      id: "contact",
      text: "Contact",
    },
];
export const UserData = {
  name: "Varun Kumar",
  title: ["Front End Developer ", " & ", "Tech Enthusiast"],
  about: [
    "Skilled frontend developer with expertise in HTML, CSS, JavaScript, React and few utilitarian libraries to deliver visually stunning and user-friendly web interfaces. My unique perspective, skills and abilities will make me a valuable asset to any team."
  ],
  WhatIDo: [
    {
      title: "Web Development",
      icon: <MonitorSmartphone color='#ffffff' strokeWidth={1} className='h-[2rem] w-[2rem] px-1 bg-[#3B82F6] rounded-full' />
    },
    {
      title: "UI/UX Web Design",
      icon: <AppWindow color='#ffffff' strokeWidth={1} className='h-[2rem] w-[2rem] px-1 bg-[#3B82F6] rounded-full' />
    },
    {
      title: "Open-Source Contribution",
      icon: <Code color='#ffffff' strokeWidth={1} className='h-[2rem] w-[2rem] px-1 bg-[#3B82F6] rounded-full' />
    },
  ],
  Interests: [
    {
      title: "Explore",
      icon: <Compass color='#ffffff' strokeWidth={1} className='h-[2rem] w-[2rem] px-1 bg-[#3B82F6] rounded-full' />
    },
    {
      title: "Food",
      icon: <Soup color='#ffffff' strokeWidth={1} className='h-[2rem] w-[2rem] px-1 bg-[#3B82F6] rounded-full' />
    },
    {
      title: "Music",
      icon: <AudioLines color='#ffffff' strokeWidth={1} className='h-[2rem] w-[2rem] px-1 bg-[#3B82F6] rounded-full' />
    },
    {
      title: "Gaming",
      icon: <Gamepad2 color='#ffffff' strokeWidth={1} className='h-[2rem] w-[2rem] px-1 bg-[#3B82F6] rounded-full' />
    },
  ],
  links: [
    {
      text:"Contact me",
      url:"contact"
    },
    {
      text:"Resume",
      url:"/Varun_Resume.pdf"
    }
  ]
}
export const SkillsData = [
  { title: "Languages", text: "JS, TS, Java and C." },
  { title: "Libraries", text: "React and TailwindCSS." },
  { title: "Markup Languages", text: "HTML and CSS." },
  { title: "Other", text: "Selenium, MySQL, AWS, GIT and BDD" },
]
export const contactData = [
    {
      url: "https://github.com/varunmsd99",
      icon: <GithubIcon size={48} color='#707070' strokeWidth={1} className='mb-3' />,
      name: "Github",
      text: "Check out my code",
      subtext: "Open Github",
    },
    {
      url: "https://www.linkedin.com/in/varunpelluru/",
      icon: <Linkedin size={48} color='#707070' strokeWidth={1} className='mb-3' />,
      name: "LinkedIn",
      text: "Let's connect!",
      subtext: "Connect now",
    },
    {
      url: "https://twitter.com/varun_vsgvk",
      icon: <Twitter size={48} color='#707070' strokeWidth={1} className='mb-3' />,
      name: "X (Twitter)",
      text: "follow me on X",
      subtext: "follow me",
    },
]
export const ProjectData = [
  {
    title: "FoodVilla",
    subtitle: "A Swiggy Look-a-like Food Ordering Website",
    img: foodVilla,
    summary: "A React app built using the Swiggy's live API's and other trending technologies like Tailwind CSS for Styling, Redux for state management, React Router DOM, Parcel, Babel and many more.",
    techs: ["React, Redux, React Router, TailwindCSS"],
    githubLink: "https://github.com/varunmsd99/FoodVillaNamasteReact",
    projectLink: "https://food-villa-react-app.netlify.app/",
  },
  {
    title: "3D Portfolio",
    subtitle: "A portfolio website made using React",
    img: portfolio,
    summary: "This project is a 3D responsive portfolio website with 3D elements using Spline3D, Reactjs and Tailwind CSS showcasing a collection of personal projects and professional experiences.",
    techs: ["React, Spline 3D, React Scroll, TailwindCSS"],
    githubLink: "https://github.com/varunmsd99/MyPortfolio",
    projectLink: "https://varun-vk.netlify.app/",
  }
]
export const ExperienceData = [
  {
    role: "Project Engineer",
    name: "Wipro",
    duration: "Mar-21 - Present",
    description: "Working as a Automation Engineer for Payment Execution for end-to-end testing of payments for renowned Bank of UK",
    skills: "Selenium, BDD, GIT, Postman API Testing, UFT, JIRA",
    img: wipro,
  }
]
export const EducationData = [
  {
    stream: "B. Tech - EEE",
    name: "MVGR College of Engineering(A)",
    duration: "2016 - 2020",
    description: "Completed B. Tech. in Electrical and Electronics Engineering (EEE) with a CGPA of 8.79",
    image: mvgr,
  },
  {
    stream: "Higher Secondary Education - MPC",
    name: "Sri Chaitanya Junior college",
    duration: "2014 - 2016",
    description: "Completed Higher Secondary Education in MPC domain with a score of 95.7%",
    image: inter,
  },
  {
    stream: "Secondary Education - ICSE",
    name: "St. Ann's English Medium School",
    duration: "2004 - 2014",
    description: "Completed Secondary Education in ICSE with a score of 84.6%",
    image: school,
  },
]