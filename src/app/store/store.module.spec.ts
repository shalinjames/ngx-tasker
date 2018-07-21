import { StoreModule } from "./store.module";

describe("StoreModuleModule", () => {
  let storeModuleModule: StoreModule;

  beforeEach(() => {
    storeModuleModule = new StoreModule();
  });

  it("should create an instance", () => {
    expect(storeModuleModule).toBeTruthy();
  });
});
