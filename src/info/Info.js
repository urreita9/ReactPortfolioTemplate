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
  bio: "Hello! I'm Francisco. I'm a frontend developer for Woopi. I completed Henry bootcamp and I am currently studying Computer Science at the Universidad Abierta Interamericana.",
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
