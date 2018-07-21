import { ListMaterialModule } from "./list-material.module";

describe("MaterialModuleModule", () => {
  let materialModuleModule: ListMaterialModule;

  beforeEach(() => {
    materialModuleModule = new ListMaterialModule();
  });

  it("should create an instance", () => {
    expect(materialModuleModule).toBeTruthy();
  });
});
