import { ProxyState } from "../AppState.js"
import { machineService } from "../Services/MachineServices.js"

export class MachineController {
  constructor() {

  }
  count() {
    console.log('hello')
    machineService.count()
    document.getElementById('mon').innerHTML = ProxyState.money.toString()
  }
}

