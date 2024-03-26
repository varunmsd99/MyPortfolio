import { Linkedin, GithubIcon, Twitter} from 'lucide-react'
import foodVilla from '../images/foodVilla.png'
import portfolio from '../images/portfolio.png'
import wipro from '../images/wipro.png'
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
    "I am based out of Vizag, the city of Destiny. I am currently working as a Software Engineer at Wipro with around 2+ years of experience.",
    "I have expertise in frontend technologies like JavaScript, React and few utilitarian libraries useful for development. I am passionate about open source.",
    "I believe in hard work and to be successful in life, one needs to be obsessive with their dreams and keep working towards them.",
    "I am confident that my unique perspective, skills and abilities will make me a valuable asset to any team."
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
    summary: "This is a react app built using the live Swiggy API's and various other trending technologies like Tailwind CSS as a Styling Framework, Redux for state management, React Router DOM for page navigation, Parcel as a bundler, Babel for transpiling code and many more.",
    techs: ["React, Redux, React Router, TailwindCSS"],
    githubLink: "https://github.com/varunmsd99/FoodVillaNamasteReact",
    projectLink: "https://food-villa-react-app.netlify.app/",
  },
  {
    title: "3D Portfolio",
    subtitle: "A 3D personal portfolio",
    img: portfolio,
    summary: "This project is a 3D responsive portfolio website with 3D elements using Spline3D, Reactjs and Tailwind CSS showcasing a collection of personal projects and professional experiences.",
    techs: ["React, Spline 3D, React Scroll, TailwindCSS"],
    githubLink: "https://github.com/varunmsd99/MyPortfolio",
    projectLink: "https://varun-vk.netlify.app/",
  }
]
export const ExperienceData = [
  {
    img: wipro,
  }
]