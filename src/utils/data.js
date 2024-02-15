import { Linkedin, GithubIcon, Twitter} from 'lucide-react'

//export const serviceApiKey = process.env.SERVICE_ID;
export const templateApiKey = process.env.TEMPLATE_ID;
//export const publicApiKey = process.env.publicKey;

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