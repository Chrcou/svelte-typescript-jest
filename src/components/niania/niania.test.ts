import { render } from "@testing-library/svelte";
import niania from "./niania.svelte";
test("should render", () => {
  const results = render(niania, { props: { variable: "niania" } });
  
  expect(() => results.getByText("niania works !")).not.toThrow();
});
