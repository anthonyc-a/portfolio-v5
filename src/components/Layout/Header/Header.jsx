import React from "react"
import Banner from "./Banner/Banner"
import ContactBtn from "./ContactBtn/ContactBtn"
import Logo from "./Logo/Logo"
import Time from "./Time/Time"

const Header = ({ setCursorExpand }) => {
  return (
    <div className="header">
      <Logo setCursorExpand={setCursorExpand} />
      <div className="header-content">
        <Time />
        <ContactBtn setCursorExpand={setCursorExpand} />
        <Banner />
      </div>
    </div>
  )
}

export default Header
