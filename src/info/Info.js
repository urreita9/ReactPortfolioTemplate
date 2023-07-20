import self from "../img/self.jpg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"]

export const info = {
  firstName: "Francisco",
  lastName: "Urrea",
  initials: "fu",
  position: "a Frontend Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, //
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "🎸",
      text: "fueled by music",
    },
    {
      emoji: "🌎",
      text: "based in Argentina",
    },
    {
      emoji: "💼",
      text: "developer at Woopi",
    },
    {
      emoji: "📧",
      text: "francisco.urrea9@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/urreita9",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/francisco-urrea/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
  ],
  bio: [
    {
      title: "Woopi, Argentina | August 2022 - Present.",
      description:
        "Argentinian company that develops both web and mobile applications. ",
      tasks:
        "Technical planning, development and testing of Medicloud: a web application which works as a medicine portal where doctors can attend patients, have a shift system and give medical prescriptions online. Participation, development and testing of other proyects from the company (Violetta, RCTA)",
      techs:
        "Typescript, React (web), cypress, React Native CLI, Jest, React Native Testing Library.",
    },
    {
      title: "Aid for Aids, Colombia | June 2022 - Present.",
      description:
        "Aid for Aids is a non-profit organization committed to empowering communities vulnerable to HIV and the general population.",
      tasks:
        "Technical planning, development and testing of a mobileapplication to provide medical and psychological care by videocall to vulnerable populations in Latin America. Web backoffice development used by doctors andorganization staff.",
      techs:
        "Typescript, Next Js (web), React Native CLI, styled-components, Jest, React Native Testing Library.",
    },
  ],

  skills: {
    proficientWith: [
      "javascript",
      "typescript",
      "react",
      "react native",
      "git",
      "bootstrap",
      "html5",
      "css3",
      "sass",
    ],
    exposedTo: ["nodejs", "postgresql"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "bass guitar",
      emoji: "🎸",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
  ],
  portfolio: [
    {
      title: "Movies App",
      live: "",
      source: "https://github.com/urreita9/movies_app",
      image: mock1,
    },
    {
      title: "Pat Mahomes Store",
      live: "https://patmahomes-store-coderhouse.web.app/all",
      source:
        "https://github.com/urreita9/PatMahomesEcommerceClone__coderHouse",
      image: mock2,
    },
    {
      title: "Todo App",
      live: "https://todo-app-eight-xi.vercel.app/",
      source: "https://github.com/urreita9/todo-app",
      image: mock3,
    },
    {
      title: "Splitter",
      live: "https://tip-calculator-app-nine.vercel.app/",
      source: "https://github.com/urreita9/tip-calculator-app",
      image: mock4,
    },
    {
      title: "Gifos",
      live: "https://urreita9.github.io/giphos/index.html#",
      source: "https://github.com/urreita9/giphos",
      image: mock5,
    },
  ],
}
