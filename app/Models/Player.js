import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"
export class Player {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.score = 0
  }

  get ListTemplate() {
    return `

        <div class="card" style="width: 18rem; height: 11rem;">
          <h5 class="card-header text-center">Player: ${this.name}</h5>
          <div class="card-body">
            <div class="card-text text-center">
              <p id="players">Score: ${this.score}</p>
            </div>
          </div>
        </div>`
  }

  // get PlayerTemplate () {
  //   return `
  //   <input name="name" id="name" type="text" class="form-control" placeholder="Name..." aria-label="playerName" aria-describedby="addon-wrapping">${this.name}`
  // }

}

