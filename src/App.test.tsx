import { render, screen } from "@testing-library/react";

import { expect, test } from "vitest";
import App from "./App";

test("init test", () => {
  render(<App />);
  const text = screen.getByText(
    "Click on the Vite and React logos to learn more"
  );

  expect(text).toBeInTheDocument();
});
