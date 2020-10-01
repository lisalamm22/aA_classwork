import React from "react"
import ReactDOM from "react-dom"
import * as Minesweeper from "./minesweeper.js"
import Game from "./components/game"

document.addEventListener("DOMContentLoaded", () => {
    let root = document.getElementById("root")
    ReactDOM.render(<Game />, root)
})