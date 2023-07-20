import self from "../img/self.jpg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"]
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Francisco",
  lastName: "Urrea",
  initials: "fu", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Frontend Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
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
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
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
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Movies App",
      live: "", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/urreita9/movies_app", // this should be a link to the **repository** of the project, where the code is hosted.
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
