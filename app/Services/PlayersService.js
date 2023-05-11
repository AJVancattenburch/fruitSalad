import { appState } from "../AppState.js"
import { PlayersController } from "../Controllers/PlayersController.js"
import { Player } from "../Models/Player.js"
class PlayersService {
  constructor() {
    console.log("herro from players service")
  }

  setActive(playerId){
    console.log('found player')
    let foundPlayer = appState.players.find(p => p.id == playerId)
    appState.activePlayer = foundPlayer
  }

}

export const playersService = new PlayersService()