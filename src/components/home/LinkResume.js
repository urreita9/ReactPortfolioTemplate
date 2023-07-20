import React from "react"
import { info } from "../../info/Info"
import Pdf from "../../documents/Resume-FrontendDev-FranciscoUrrea.pdf"

const WIDTH = 200
const HEIGHT = 40
const BORDER_RADIUS = 20

export const LinkResume = ({ darkMode }) => {
  return (
    <div
      style={{
        background: info.gradient,
        width: WIDTH,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: HEIGHT,
        borderRadius: BORDER_RADIUS,
        marginTop: 5,
      }}
    >
      <a
        href={Pdf}
        target='_blank'
        style={{
          textDecoration: "underline",
          textUnderlineOffset: 5,
          textAlign: "center",
        }}
        rel='noreferrer'
      >
        <div
          style={{
            width: WIDTH - 2,
            height: HEIGHT - 2,
            backgroundColor: darkMode ? "#1f1f1f" : "#ffffff",
            borderRadius: BORDER_RADIUS,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
          }}
        >
          Get my resume
        </div>
      </a>
    </div>
  )
}
