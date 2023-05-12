import { appState } from "../AppState.js"
import { playersService } from "../Services/PlayersService.js"
import { setHTML } from "../Utils/Writer.js"
import { Player } from "../Models/Player.js"
import { getFormData } from "../Utils/FormHandler.js"  




function _drawPlayers() {
  console.log("You don't suck!")
  let players = appState.players
  let template = ''
  players.forEach(player => template += player.ListTemplate)
  setHTML("leaderboard", template)
}

function _drawActive() {
  console.log("drawing active player");
  // let activePlayer = appState.activePlayer
}

// function _drawCreatePlayerButton() {
//   console.log("player button buttoning")
//   setHTML("createPlayerButton", Player.playerForm)
// }
export class PlayersController {
  constructor() {
    console.log("herro from players controller")
    _drawPlayers()
    // _drawCreatePlayerButton()
    // appState.on("players", _drawPlayers)
    
    // appState.on("drawCreatePlayerButton")
  }

  // setActive(playerId){
  //   console.log('setting active', playerId)
  //   playersService.setActive(playerId)
  // }

  createPlayer() {
    window.event.preventDefault()
    const formHTML = window.event.target
    console.log("this is the onsubmit event", formHTML);
    const formData = getFormData(formHTML)
    console.log("formatted from obj", formData)
    playersService.createPlayer(formData)
    formHTML.reset()
    // bootstrap.Modal.getOrCreateInstance('#modal').hide()
  }

}

