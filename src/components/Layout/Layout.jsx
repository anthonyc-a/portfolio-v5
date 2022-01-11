import React from "react"
import Header from "./Header/Header"
import Info from "./Info/Info"
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch"

const Layout = ({ children, infoActive, setInfoActive }) => {
  return (
    <>
      <Header />
      <ThemeSwitch />
      <main>{children}</main>
      <Info infoActive={infoActive} setInfoActive={setInfoActive} />
    </>
  )
}

export default Layout
