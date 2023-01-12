import { screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { CreatePost } from "./CreatePost";
import { customRender } from "../../test-utils";

describe("Create page", () => {
  test("should render title correctly", () => {
    customRender(
      <Router>
        <CreatePost />
      </Router>
    );

    const title = screen.getByText(/create post/i);
    expect(title).toBeInTheDocument();
  });
});
