import React from "react"

const ContactBtn = ({ setCursorExpand }) => {
  return (
    <a
      className="contact-btn"
      href="mailto:anthonyc.animba@gmail.com"
      onMouseEnter={() => {
        setCursorExpand(true)
      }}
      onMouseLeave={() => {
        setCursorExpand(false)
      }}
    >
      contact
    </a>
  )
}

export default ContactBtn
