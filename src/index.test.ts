import * as I from "./index";

test("import/exports", () => {
  expect(typeof I.Database).toEqual("object");
  expect(typeof I.SSO).toEqual("object");
});
