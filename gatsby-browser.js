import React from "react"
import ToggleThemeProvider from "./src/components/context/ToggleThemeProveide"
import GlobalCountProvider from "./src/components/context/GlobalCountProvider"
import Loader from "./src/components/Loader/Loader"

export const wrapRootElement = ({ element }) => {
  return (
    <ToggleThemeProvider>
      <Loader />
      {element}
    </ToggleThemeProvider>
  )
}

export const wrapPageElement = ({ element }) => {
  return <GlobalCountProvider>{element}</GlobalCountProvider>
}
