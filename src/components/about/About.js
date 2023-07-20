import React from "react"
import Style from "./About.module.scss"
import Terminal from "./Terminal"
import { Box } from "@mui/material"
import { info } from "../../info/Info"

export default function About({ darkMode }) {
  const firstName = info.firstName.toLowerCase()

  function aboutMeText(item) {
    return (
      <div key={item.description}>
        <p>
          <span style={{ color: info.baseColor, fontSize: 20 }}>
            {item.title}
          </span>
        </p>
        <p>{item.description}</p>
        <br />
        <p>{item.tasks}</p>
        <br />
        <p>
          <span style={{ color: "#e671ff" }}>{item.techs}</span>
        </p>
      </div>
    )
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>Skills/tools</span>
        </p>
        <p style={{ color: info.baseColor }}> Proficient With</p>
        <ul className={Style.skills}>
          {info.skills.proficientWith.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <p style={{ color: info.baseColor }}> Exposed To</p>
        <ul className={Style.skills}>
          {info.skills.exposedTo.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    )
  }

  function backgroundText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>Background</span>
        </p>
        <p>
          Life took an unexpected turn for me, a psychology degree holder, as I
          spent my early adulthood in the mundane confines of office jobs.
          However, my world changed when coding entered my life like a breath of
          fresh air. Discovering a passion I never knew existed, I dedicated
          myself to learning and developing my coding skills. My journey began
          as a self-taught developer, devouring every resource available to me.
          Fueled by a desire to turn this newfound passion into a career, I took
          on the challenge of two full-stack bootcamps.
          <br />
          With 3 years of professional experience under my belt, I now thrive in
          the world of frontend development, focusing on crafting web and mobile
          applications. My pursuit of knowledge continues as I study computer
          science at the university, eagerly absorbing every opportunity to grow
          and make my mark in this exciting field.
        </p>
      </>
    )
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>Hobbies/interests</span>
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    )
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      {info.bio.map((item) => (
        <Terminal key={item.description} text={aboutMeText(item)} />
      ))}
      <Terminal text={skillsText()} />
      <Terminal text={backgroundText()} />
      <Terminal text={miscText()} />
    </Box>
  )
}
