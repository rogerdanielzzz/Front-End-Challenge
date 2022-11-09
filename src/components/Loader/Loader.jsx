//Dependencies import
import React from 'react'
// Style in SCSS format
import Style from "./Loader.module.scss"

// A component that will render a Spinner when the isLoading global state is true
const Loader = () => {
  return (
    <div className={Style.loader}></div>
  )
}

export default Loader

