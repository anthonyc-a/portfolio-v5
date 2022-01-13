import React from "react"
import ToggleThemeProvider from "./src/components/context/ToggleThemeProveide"
import GlobalCountProvider from "./src/components/context/GlobalCountProvider"

export const wrapRootElement = ({ element }) => {
  return <ToggleThemeProvider>{element}</ToggleThemeProvider>
}

export const wrapPageElement = ({ element }) => {
  return <GlobalCountProvider>{element}</GlobalCountProvider>
}
