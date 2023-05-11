import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"
export class Player {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.score = -0
  }

  get ListTemplate() {
    return `
    <div class="input-group flex-nowrap">
      <span class="input-group-text" id="addon-wrapping">@</span>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">${this.id}
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">${this.name}
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">${this.score}
    </div>`
  }

  // static PlayerForm() {
  //   return `
  //   `
  // }

}

