import React from "react"
import Banner from "./Banner/Banner"
import ContactBtn from "./ContactBtn/ContactBtn"
import Logo from "./Logo/Logo"
import Time from "./Time/Time"

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="header-content">
          <Time />
          <ContactBtn />
          <Banner />
      </div>
    </div>
  )
}

export default Header
