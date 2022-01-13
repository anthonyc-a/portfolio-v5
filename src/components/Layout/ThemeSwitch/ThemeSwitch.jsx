import React from "react"
import {
  ThemeDispatchContext,
  ThemeStateContext,
} from "../../context/ToggleThemeProveide"

const ThemeSwitch = ({ setCursorExpand }) => {
  const theme = React.useContext(ThemeStateContext)
  const toggleTheme = React.useContext(ThemeDispatchContext)

  return (
    <div className="theme-switch">
      <div
        className={
          theme.lightMode === false ? "switch-item active" : "switch-item"
        }
        onMouseEnter={() => {
          setCursorExpand(true)
        }}
        onMouseLeave={() => {
          setCursorExpand(false)
        }}
        onClick={() => {
          toggleTheme({ type: "DARK_THEME" })
        }}
        onKeyDown={() => {
          toggleTheme({ type: "DARK_THEME" })
        }}
        role={"button"}
        tabIndex={0}
      >
        dark
      </div>
      <div
        className={
          theme.lightMode === false ? "switch-item" : "switch-item active"
        }
        onMouseEnter={() => {
          setCursorExpand(true)
        }}
        onMouseLeave={() => {
          setCursorExpand(false)
        }}
        onClick={() => {
          toggleTheme({ type: "LIGHT_THEME" })
        }}
        onKeyDown={() => {
          toggleTheme({ type: "LIGHT_THEME" })
        }}
        role={"button"}
        tabIndex={0}
      >
        light
      </div>
    </div>
  )
}

export default ThemeSwitch
