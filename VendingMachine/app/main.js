import { MachineController } from "./Controllers/MachineController.js";

class App {
  machineController = new MachineController();
}

window["app"] = new App();


