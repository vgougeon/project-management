export enum StateName {
  WaitForScan,
  WaitQuantity,
  WaitForPCode,
  UpdateAmount,
  FindProduct,
  UnknownProduct,
  ReturnProduct,
  RemoveProductQuantity,
  Pay,
  PaymentMode,
  PayOK,
  PayError,
  EnterReturnQuntity,
}

export class StateManager {
  stateName: StateName;
  private static instance: Record<string, StateManager>;
  private constructor(stateName: StateName) {
    this.stateName = stateName;
  }

  static getInstance(state: StateName): StateManager {
    if (!StateManager.instance[state]) {
      StateManager.instance[state] = new StateManager(state);
    }

    return StateManager.instance[state];
  }
}
