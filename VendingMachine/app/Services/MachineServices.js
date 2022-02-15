import { ProxyState } from "../AppState.js";

class MachineService {
  count() {
    console.log('hellor from the service');
    ProxyState.money++
    console.log(ProxyState.money);

  }
}

export const machineService = new MachineService()