import { BoardMaterialModule } from "./material-module.module";

describe("MaterialModuleModule", () => {
  let materialModuleModule: BoardMaterialModule;

  beforeEach(() => {
    materialModuleModule = new BoardMaterialModule();
  });

  it("should create an instance", () => {
    expect(materialModuleModule).toBeTruthy();
  });
});
