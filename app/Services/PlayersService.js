import { appState } from "../AppState.js"
// import { PlayersController } from "../Controllers/PlayersController.js"
import { Player } from "../Models/Player.js"
import { saveState } from "../Utils/Store.js"

function _savePlayers() {
  saveState("players", appState.players)
}
class PlayersService {
    
      createPlayer(formData) {
        let newPlayer = new Player(formData)
        appState.players.push(newPlayer)
        _savePlayers()
        console.log(appState.players)
        appState.emit('leaderboard')
        
      }

  // setActive(playerId){
  //   console.log('found player')
  //   let foundPlayer = appState.players.find(p => p.id == playerId)
  //   appState.activePlayer = foundPlayer
  // }

}

export const playersService = new PlayersService()