import React from "react"

function IconLink(props) {
  const { link, title, icon } = props
  return (
    <>
      {link ? (
        <a href={link} target={"_blank"} rel='noopener noreferrer'>
          <i className={icon} /> {title}
        </a>
      ) : (
        <>
          <i className={icon} /> {title}
        </>
      )}
    </>
  )
}

export default IconLink
