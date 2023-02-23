import React from "react"

function Header ({darkButton, isDarkMode}) {
    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={darkButton}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}

export default Header